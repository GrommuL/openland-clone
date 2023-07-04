import Logo from '@/assets/Logo.png'
import cn from 'classnames'
import style from './StartPage.module.scss'
import { LinkButton } from '@/components/UI/LinkButton'

export const StartPage = () => {
	return (
		<main className={cn(style.startPage)}>
			<div className={cn(style.content)}>
				<div className={cn(style.box)}>
					<img className={cn(style.logo)} src={Logo} alt='Logo' />
					<div className={cn(style.info)}>
						<h1 className={cn(style.title)}>Openland</h1>
						<p className={cn(style.description)}>
							Modern social network
							<br />
							built for you, not advertisers
						</p>
					</div>
				</div>
				<div className={cn(style.buttons)}>
					<LinkButton label='Login' href='/login' />
					<LinkButton label='Register' href='/register' grey />
				</div>
			</div>
		</main>
	)
}
