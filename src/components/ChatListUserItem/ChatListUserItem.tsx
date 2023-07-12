import cn from 'classnames'
import style from './ChatListUserItem.module.scss'
import { DocumentData } from 'firebase/firestore'
import { InitialStateUserType } from '@/redux/slices/chatSlice'

interface ChatListUserItemProps {
	currentChatUserId: string
	chatUser: DocumentData
	onClick: (chatUserInfo: InitialStateUserType) => void
}

export const ChatListUserItem: React.FC<ChatListUserItemProps> = ({
	currentChatUserId,
	chatUser,
	onClick
}) => {
	return (
		<div
			className={cn(
				style.user,
				currentChatUserId === chatUser[1].userInfo.uid && style.active
			)}
			onClick={() => onClick(chatUser[1]?.userInfo)}
		>
			<img
				className={cn(style.avatar)}
				src={chatUser[1].userInfo.photoURL}
				alt=''
			/>
			<div className={cn(style.userInfo)}>
				<h3
					className={cn(style.userName)}
				>{`${chatUser[1].userInfo.firstName} ${chatUser[1].userInfo.lastName}`}</h3>
			</div>
		</div>
	)
}
