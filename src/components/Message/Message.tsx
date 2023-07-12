import cn from 'classnames'
import style from './Message.module.scss'
import { DocumentData } from 'firebase/firestore'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import { useEffect, useRef } from 'react'
import { useGetDate } from '@/utils/hooks/useGetDate'
interface MessageProps {
	message: DocumentData
}

export const Message: React.FC<MessageProps> = ({ message }) => {
	const currentUser = useAppSelector((state) => state.user.currentUser)
	const chatUser = useAppSelector((state) => state.chat.user)
	const ref = useRef<null | HTMLDivElement>(null)
	const { getTodayDateFromSeconds } = useGetDate()
	const { year, month, day } = getTodayDateFromSeconds(message?.date.seconds)

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
					alt='avatar'
				/>
				<span>{`${day < 10 ? '0' + day : day}.${
					month < 10 ? '0' + month : month
				}.${year}`}</span>
			</div>
			<div className={cn(style.messageContent)}>
				<p className={cn(style.text)}>{message?.text}</p>
			</div>
		</div>
	)
}
