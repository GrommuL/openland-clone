import cn from 'classnames'
import style from './LoginPage.module.scss'
import Logo from '@/assets/Logo.png'
import { Heading } from '@/components/UI/Heading'
import { Button } from '@/components/UI/Button'

export const LoginPage = () => {
	return (
		<main className={cn(style.loginPage)}>
			<form className={cn(style.content)}>
				<img className={cn(style.logo)} src={Logo} alt='Logo' />
				<Heading
					title='Welcome back!'
					descirption='Sign in now and gain access to exclusive content!'
				/>
				<div className={cn(style.inputsContainer)}>
					<input className={cn(style.input)} type='email' placeholder='Email' />
					<input
						className={cn(style.input)}
						type='password'
						placeholder='Password'
					/>
				</div>
				<Button label='Sign in' type='submit' />
			</form>
		</main>
	)
}
