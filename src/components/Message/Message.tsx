import cn from 'classnames'
import style from './Message.module.scss'
import { DocumentData } from 'firebase/firestore'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import { useEffect, useRef } from 'react'
interface MessageProps {
	message: DocumentData
}

export const Message: React.FC<MessageProps> = ({ message }) => {
	const currentUser = useAppSelector((state) => state.user.currentUser)
	const chatUser = useAppSelector((state) => state.chat.user)
	const ref = useRef<null | HTMLDivElement>(null)
	const today = new Date(message?.date.seconds * 1000)
	const yyyy = today.getFullYear()
	const mm = today.getMonth() + 1
	const dd = today.getDate()

	useEffect(() => {
		ref.current?.scrollIntoView({ behavior: 'smooth' })
	}, [message])
	return (
		<div
			className={cn(
				style.message,
				message?.senderId === currentUser.id && style.owner
			)}
		>
			<div className={cn(style.messageInfo)}>
				<img
					className={cn(style.messageImg)}
					src={
						message?.senderId === currentUser.id
							? currentUser.avatar
							: chatUser.photoURL
					}
					alt=''
				/>
				<span>{`${dd < 10 ? '0' + dd : dd}.${
					mm < 10 ? '0' + mm : mm
				}.${yyyy}`}</span>
			</div>
			<div className={cn(style.messageContent)}>
				<p className={cn(style.text)}>{message?.text}</p>
			</div>
		</div>
	)
}
