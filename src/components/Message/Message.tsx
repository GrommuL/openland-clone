import cn from 'classnames'
import style from './Message.module.scss'
interface asd {
	asd?: boolean
}

export const Message: React.FC<asd> = ({ asd }) => {
	return (
		<div className={cn(style.message, asd && style.owner)}>
			<div className={cn(style.messageInfo)}>
				<img
					className={cn(style.messageImg)}
					// src={
					// 	message.senderId === currentUser.uid
					// 		? currentUser.photoURL
					// 		: data.user.photoURL
					// }
					src=''
					alt=''
				/>
				<span>just now</span>
			</div>
			<div className={cn(style.messageContent)}>
				<p className={cn(style.text)}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					aliquid error facere et quis iusto illum porro nihil vel explicabo
					molestiae, sit dolore nam, sint pariatur voluptatum? Repudiandae,
					aspernatur sunt.
				</p>
				{/* {message.img && <img className={cn(style.sendedImg)} src={message.img} alt='' />} */}
			</div>
		</div>
	)
}
