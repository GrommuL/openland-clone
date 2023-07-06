import { LinkButton } from '@/components/UI/LinkButton'
import NotFound from '@/assets/NotFound.png'
import cn from 'classnames'
import style from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
	return (
		<div className={cn(style.notFoundPage)}>
			<div className={cn(style.content)}>
				<div className={cn(style.box)}>
					<img className={cn(style.image)} src={NotFound} alt='404' />
					<div className={cn(style.info)}>
						<h1 className={cn(style.title)}>Something went wrong</h1>
						<p className={cn(style.description)}>
							<span className={cn(style.text)}>
								Return home or contact our team at
							</span>
							<a className={cn(style.link)} href='mailto:#'>
								hello@openland.com
							</a>
						</p>
					</div>
				</div>
				<LinkButton label='Return home' href='/' />
			</div>
		</div>
	)
}
