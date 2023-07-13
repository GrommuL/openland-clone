import cn from 'classnames'
import style from './UserPage.module.scss'
import { LinkButton } from '@/components/UI/LinkButton'
import WorkImage from '@/assets/Work.png'

export const UserPage = () => {
	return (
		<div className={cn(style.userPage)}>
			<div className={cn(style.content)}>
				<div className={cn(style.box)}>
					<img className={cn(style.image)} src={WorkImage} alt='404' />
					<div className={cn(style.info)}>
						<h1 className={cn(style.title)}>We apologize</h1>
						<p className={cn(style.description)}>
							<span className={cn(style.text)}>
								The page is under development
							</span>
						</p>
					</div>
				</div>
				<LinkButton label='Return home' href='/' />
			</div>
		</div>
	)
}
