import cn from 'classnames'
import style from './SearchUserItem.module.scss'
import { DocumentData } from 'firebase/firestore'
import { useAppSelector } from '@/utils/hooks/useAppSelector'

interface SearchUserItemProps {
	user: DocumentData
	onClick?: () => void
}

export const SearchUserItem: React.FC<SearchUserItemProps> = ({
	user,
	onClick
}) => {
	const id = useAppSelector((state) => state.user.currentUser.id)
	return (
		<div className={cn(style.user)} key={user.uid} onClick={onClick}>
			<img className={cn(style.avatar)} src={user.photoURL} alt='' />
			<div className={cn(style.userInfo)}>
				<h3
					className={cn(style.userName)}
				>{`${user.firstName} ${user.lastName}`}</h3>
				{user.uid === id ? (
					<p className={cn(style.online)}>online</p>
				) : (
					<p className={cn(style.offline)}>offline</p>
				)}
			</div>
		</div>
	)
}
