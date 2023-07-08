import cn from 'classnames'
import style from './RegisterPage.module.scss'
import Logo from '@/assets/Logo.png'

import { CameraIcon } from '@/components/UI/Icons/CameraIcon'
import { Button } from '@/components/UI/Button'
import { Heading } from '@/components/UI/Heading'
import { useUploadImgage } from '@/utils/hooks/useUploadImage'
import { registerSchema } from '@/utils/schemas/authSchema'
import { RegisterValues } from '@/types/RegisterValues'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { addCurrentUser, getAccess } from '@/redux/slices/userSlice'
import { auth, db, storage } from '@/config/firebase'

import { Link, useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { yupResolver } from '@hookform/resolvers/yup'

export const RegisterPage = () => {
	const navigate = useNavigate()
	const { avatar, getUploadImage } = useUploadImgage()
	const uploadAvatar = avatar && URL.createObjectURL(avatar)
	const dispatch = useAppDispatch()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<RegisterValues>({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		},
		mode: 'onBlur',
		resolver: yupResolver(registerSchema)
	})

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
					dispatch(
						addCurrentUser({
							id: response.user.uid,
							firstName: data.firstName,
							lastName: data.lastName,
							email: data.email,
							avatar: downloadUrl
						})
					)
					await setDoc(doc(db, 'userChats', response.user.uid), {})
				})
			})

			dispatch(getAccess(true))
			reset()
			navigate('/')
		} catch (error) {
			dispatch(getAccess(false))
		}
	}

	return (
		<main className={cn(style.registerPage)}>
			<form
				className={cn(style.content)}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
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
					<div className={cn(style.box)}>
						<input
							className={cn(style.input)}
							id='firstName'
							type='text'
							placeholder='First Name'
							{...register('firstName')}
						/>
						<span className={cn(style.error)}>{errors.firstName?.message}</span>
					</div>
					<div className={cn(style.box)}>
						<input
							className={cn(style.input)}
							id='lastName'
							type='text'
							placeholder='Last Name'
							{...register('lastName')}
						/>
						<span className={cn(style.error)}>{errors.lastName?.message}</span>
					</div>
					<div className={cn(style.box)}>
						<input
							className={cn(style.input)}
							id='email'
							type='email'
							placeholder='Email'
							{...register('email')}
						/>
						<span className={cn(style.error)}>{errors.email?.message}</span>
					</div>
					<div className={cn(style.box)}>
						<input
							className={cn(style.input)}
							id='password'
							type='password'
							placeholder='Password'
							{...register('password')}
						/>
						<span className={cn(style.error)}>{errors.password?.message}</span>
					</div>
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
