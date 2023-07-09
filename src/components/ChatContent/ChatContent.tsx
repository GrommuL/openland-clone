import cn from 'classnames'
import style from './ChatContent.module.scss'
import { ButtonWithIcon } from '../UI/ButtonWithIcon'
import { BiSend } from 'react-icons/bi'
import { Message } from '../Message'
import { useAppSelector } from '@/utils/hooks/useAppSelector'

export const ChatContent = () => {
	const chatUser = useAppSelector((state) => state.chat.user)
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
				<Message />
				<Message />
				<Message />
				<Message asd={true} />
			</div>
			<form className={cn(style.form)}>
				<input
					className={cn(style.input)}
					type='text'
					placeholder='Write a message…'
				/>
				<ButtonWithIcon icon={BiSend} size={24} type='submit' />
			</form>
		</div>
	)
}
