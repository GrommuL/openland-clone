import cn from 'classnames'
import style from './SearchUser.module.scss'
import img from '@/assets/cat.jpg'

export const SearchUser = () => {
	return (
		<div>
			<div className={cn(style.searchBox)}>
				<input
					className={cn(style.search)}
					type='search'
					placeholder='Search'
				/>
			</div>
			<div className={cn(style.user)}>
				<img className={cn(style.avatar)} src={img} alt='' />
				<div className={cn(style.userInfo)}>
					<h3 className={cn(style.userName)}>Tim Cook</h3>
					<p className={cn(style.status)}>online</p>
				</div>
			</div>
		</div>
	)
}
