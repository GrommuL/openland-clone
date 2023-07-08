import cn from 'classnames'
import style from './LoginPage.module.scss'
import Logo from '@/assets/Logo.png'
import { Heading } from '@/components/UI/Heading'
import { Button } from '@/components/UI/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '@/config/firebase'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { addCurrentUser, getAccess } from '@/redux/slices/userSlice'
import { doc, getDoc } from 'firebase/firestore'

export const LoginPage = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			await signInWithEmailAndPassword(auth, data.email, data.password)
			onAuthStateChanged(auth, async (currentuser) => {
				if (currentuser) {
					const response = await getDoc(doc(db, 'users', currentuser.uid))
					const responseData = response.data()
					const user = {
						id: responseData?.uid,
						firstName: responseData?.firstName,
						lastName: responseData?.lastName,
						email: responseData?.email,
						avatar: responseData?.photoURL
					}
					dispatch(addCurrentUser(user))
				}
			})
			dispatch(getAccess(true))
			reset()
			navigate('/')
		} catch (error) {
			dispatch(getAccess(false))
			console.log(error)
		}
	}
	return (
		<main className={cn(style.loginPage)}>
			<form onSubmit={handleSubmit(onSubmit)} className={cn(style.content)}>
				<img className={cn(style.logo)} src={Logo} alt='Logo' />
				<Heading
					title='Welcome back!'
					descirption='Sign in now and gain access to exclusive content!'
				/>
				<div className={cn(style.inputsContainer)}>
					<input
						className={cn(style.input)}
						type='email'
						placeholder='Email'
						{...register('email')}
					/>
					<input
						className={cn(style.input)}
						type='password'
						placeholder='Password'
						{...register('password')}
					/>
				</div>
				<Button label='Sign in' type='submit' />
			</form>
		</main>
	)
}
