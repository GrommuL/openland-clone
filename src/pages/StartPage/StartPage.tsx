import Logo from '@/assets/Logo.png'
import cn from 'classnames'
import style from './StartPage.module.scss'
import { LinkButton } from '@/components/UI/LinkButton'
import { Heading } from '@/components/UI/Heading'

export const StartPage = () => {
	return (
		<main className={cn(style.startPage)}>
			<div className={cn(style.content)}>
				<div className={cn(style.box)}>
					<img className={cn(style.logo)} src={Logo} alt='Logo' />
					<Heading
						title='Openland'
						descirption='Modern social network built for you, not advertisers'
					/>
				</div>
				<div className={cn(style.buttons)}>
					<LinkButton label='Login' href='/login' />
					<LinkButton label='Register' href='/register' grey />
				</div>
			</div>
		</main>
	)
}
