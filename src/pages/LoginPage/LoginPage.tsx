import cn from 'classnames'
import style from './LoginPage.module.scss'
import Logo from '@/assets/Logo.png'
import { Heading } from '@/components/UI/Heading'
import { Button } from '@/components/UI/Button'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { getAccess } from '@/redux/slices/userSlice'
import { useLogin } from '@/utils/hooks/useLogin'

export const LoginPage = () => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const { loginUser } = useLogin()
	const { register, handleSubmit, reset } = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		try {
			await loginUser(data)
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
