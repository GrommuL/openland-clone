import cn from 'classnames'
import style from './ChatList.module.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import { DocumentData, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { InitialStateUserType, getChat } from '@/redux/slices/chatSlice'
import { ChatListUserItem } from '../ChatListUserItem'

export const ChatList = () => {
	const dispatch = useAppDispatch()
	const currentUserId = useAppSelector((state) => state.user.currentUser.id)
	const currentChatUserId = useAppSelector((state) => state.chat.user.uid)
	const [chats, setChats] = useState<DocumentData>()
	const chatList = chats && Object.entries(chats)

	useEffect(() => {
		const getChats = () => {
			const updateChats = onSnapshot(
				doc(db, 'userChats', currentUserId),
				(doc) => {
					setChats(doc.data())
				}
			)
			return () => {
				updateChats()
			}
		}
		currentUserId && getChats()
	}, [currentUserId])

	const handleSelectChat = (selectedUserFromChatList: InitialStateUserType) => {
		const chatId =
			currentUserId > selectedUserFromChatList.uid
				? currentUserId + selectedUserFromChatList.uid
				: selectedUserFromChatList.uid + currentUserId
		dispatch(getChat({ user: selectedUserFromChatList, chatId }))
	}
	return (
		<div>
			<div className={cn(style.title)}>Active Chats</div>
			<div>
				{chatList &&
					chatList.map((chat) => (
						<ChatListUserItem
							key={chat[0]}
							currentChatUserId={currentChatUserId}
							chatUser={chat}
							onClick={handleSelectChat}
						/>
					))}
			</div>
		</div>
	)
}
