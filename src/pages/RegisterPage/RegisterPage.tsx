import cn from 'classnames'
import style from './RegisterPage.module.scss'
import { CameraIcon } from '@/components/UI/Icons/CameraIcon'
import { Link } from 'react-router-dom'
import { Button } from '@/components/UI/Button'

export const RegisterPage = () => {
	return (
		<main className={cn(style.registerPage)}>
			<form className={cn(style.content)}>
				<div className={cn(style.info)}>
					<h1 className={cn(style.title)}>New account</h1>
					<p className={cn(style.description)}>
						Sign up now and gain access to exclusive content!
					</p>
				</div>
				<div className={cn(style.inputsContainer)}>
					<div className={cn(style.downloadImage)}>
						<input
							className={cn(style.downloadInput)}
							type='file'
							name='avatar'
							id='avatar'
						/>
						<CameraIcon />
						{/* <img className={cn(style.avatar)} src={Logo} alt='' /> */}
					</div>
					<input className={cn(style.input)} type='email' placeholder='Email' />
					<input
						className={cn(style.input)}
						type='password'
						placeholder='Password'
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