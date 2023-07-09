import cn from 'classnames'
import style from './ChatContent.module.scss'
import { ButtonWithIcon } from '../UI/ButtonWithIcon'
import { BiSend } from 'react-icons/bi'
import { Message } from '../Message'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import { useEffect, useState } from 'react'
import {
	DocumentData,
	Timestamp,
	arrayUnion,
	doc,
	onSnapshot,
	updateDoc
} from 'firebase/firestore'
import { db } from '@/config/firebase'
import { v4 as uuid } from 'uuid'

export const ChatContent = () => {
	const [messages, setMessages] = useState<DocumentData>()
	const [text, setText] = useState('')
	const chatId = useAppSelector((state) => state.chat.chatId)
	const chatUser = useAppSelector((state) => state.chat.user)
	const currentUserId = useAppSelector((state) => state.user.currentUser.id)

	useEffect(() => {
		onSnapshot(doc(db, 'chats', chatId), (doc) => {
			doc.exists() && setMessages(doc.data().messages)
		})
	}, [chatId])

	const sendMessage = async () => {
		await updateDoc(doc(db, 'chats', chatId), {
			messages: arrayUnion({
				id: uuid(),
				text,
				senderId: currentUserId,
				date: Timestamp.now()
			})
		})
		setText('')
	}

	return (
		<div className={cn(style.chat)}>
			<div className={cn(style.header)}>
				<div className={cn(style.info)}>
					<img className={cn(style.avatar)} src={chatUser?.photoURL} alt='' />
					<h4
						className={cn(style.name)}
					>{`${chatUser.firstName} ${chatUser.lastName}`}</h4>
				</div>
			</div>
			<div className={cn(style.chatField)}>
				{messages &&
					messages.map((msg: DocumentData) => (
						<Message key={msg.id} message={msg} />
					))}
			</div>
			<div className={cn(style.form)}>
				<input
					className={cn(style.input)}
					type='text'
					placeholder='Write a message…'
					onChange={(e) => setText(e.target.value)}
					value={text}
				/>
				<ButtonWithIcon
					icon={BiSend}
					size={24}
					type='submit'
					onClick={sendMessage}
				/>
			</div>
		</div>
	)
}
