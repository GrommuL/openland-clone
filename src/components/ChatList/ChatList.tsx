import cn from 'classnames'
import style from './ChatList.module.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import { DocumentData, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase'

export const ChatList = () => {
	const currentUserId = useAppSelector((state) => state.user.currentUser.id)
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
	return (
		<div>
			<div className={cn(style.title)}>Active Chats</div>
			<div>
				{chatList &&
					chatList.map((chat) => (
						<div className={cn(style.user)} key={chat[0]}>
							<img
								className={cn(style.avatar)}
								src={chat[1].userInfo.photoURL}
								alt=''
							/>
							<div className={cn(style.userInfo)}>
								<h3
									className={cn(style.userName)}
								>{`${chat[1].userInfo.firstName} ${chat[1].userInfo.lastName}`}</h3>
							</div>
						</div>
					))}
			</div>
		</div>
	)
}
