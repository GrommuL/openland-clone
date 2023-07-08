import cn from 'classnames'
import style from './SearchUserItem.module.scss'
import { DocumentData } from 'firebase/firestore'

interface SearchUserItemProps {
	user: DocumentData
}

export const SearchUserItem: React.FC<SearchUserItemProps> = ({ user }) => {
	return (
		<div className={cn(style.user)} key={user.uid}>
			<img className={cn(style.avatar)} src={user.photoURL} alt='' />
			<div className={cn(style.userInfo)}>
				<h3
					className={cn(style.userName)}
				>{`${user.firstName} ${user.lastName}`}</h3>
				<p className={cn(style.status)}>online</p>
			</div>
		</div>
	)
}
