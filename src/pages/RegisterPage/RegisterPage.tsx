import cn from 'classnames'
import style from './RegisterPage.module.scss'
import Logo from '@/assets/Logo.png'
import { CameraIcon } from '@/components/UI/Icons/CameraIcon'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/UI/Button'
import { Heading } from '@/components/UI/Heading'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db, storage } from '@/config/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { getAccess } from '@/redux/slices/userSlice'

export const RegisterPage = () => {
	const navigate = useNavigate()
	const [avatar, setAvatar] = useState<File>()
	const uploadAvatar = avatar && URL.createObjectURL(avatar)
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
	})

	const getUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const img = e.target.files[0]
			setAvatar(img)
		}
	}
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)
			const dateMark = new Date().getTime()
			const storageRef = ref(
				storage,
				`${data.firstName + data.lastName + dateMark}`
			)

			await uploadBytesResumable(storageRef, data.avatar[0]).then(() => {
				getDownloadURL(storageRef).then(async (downloadUrl) => {
					await updateProfile(response.user, {
						displayName: `${data.firstName} ${data.lastName}`,
						photoURL: downloadUrl
					})
					await setDoc(doc(db, 'users', response.user.uid), {
						uid: response.user.uid,
						firstName: data.firstName,
						lastName: data.lastName,
						email: data.email,
						photoURL: downloadUrl
					})
					await setDoc(doc(db, 'userChats', response.user.uid), {})
				})
			})
			dispatch(getAccess(true))
			reset()
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<main className={cn(style.registerPage)}>
			<form className={cn(style.content)} onSubmit={handleSubmit(onSubmit)}>
				<img className={cn(style.logo)} src={Logo} alt='Logo' />
				<Heading
					title='New account'
					descirption='Sign up now and gain access to exclusive content!'
				/>
				<div className={cn(style.inputsContainer)}>
					<div className={cn(style.downloadImage)}>
						<input
							{...register('avatar')}
							onChange={getUploadImage}
							className={cn(style.downloadInput)}
							type='file'
							name='avatar'
							id='avatar'
						/>
						{uploadAvatar?.length ? (
							<img className={cn(style.avatar)} src={uploadAvatar} alt='' />
						) : (
							<CameraIcon />
						)}
					</div>
					<input
						className={cn(style.input)}
						id='firstName'
						type='text'
						placeholder='First Name'
						{...register('firstName')}
					/>
					<input
						className={cn(style.input)}
						id='lastName'
						type='text'
						placeholder='Last Name'
						{...register('lastName')}
					/>
					<input
						className={cn(style.input)}
						id='email'
						type='email'
						placeholder='Email'
						{...register('email')}
					/>
					<input
						className={cn(style.input)}
						id='password'
						type='password'
						placeholder='Password'
						{...register('password')}
					/>
				</div>
				<Button label='Sign up' type='submit' />
				<span className={cn(style.warning)}>
					By creating an account you are accepting our
					<div className={style.warningContainer}>
						<Link className={cn(style.warningLink)} to='/'>
							Terms of service
						</Link>
						and
						<Link className={cn(style.warningLink)} to='/'>
							Privacy policy
						</Link>
					</div>
				</span>
			</form>
		</main>
	)
}
