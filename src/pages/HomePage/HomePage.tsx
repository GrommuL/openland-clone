import { AppContainer } from '@/components/AppContainer/AppContainer'
import cn from 'classnames'
import style from './HomePage.module.scss'
import { SearchUser } from '@/components/SearchUser'
import { ChatList } from '@/components/ChatList'
import { ChatContent } from '@/components/ChatContent'
import { useAppSelector } from '@/utils/hooks/useAppSelector'
import Logo from '@/assets/Logo.png'

export const HomePage = () => {
	const chatId = useAppSelector((state) => state.chat.chatId)
	return (
		<AppContainer>
			<div className={cn(style.appSidebar)}>
				<div className={cn(style.appHeader)}>Chats</div>
				<SearchUser />
				<ChatList />
			</div>
			{chatId.length ? (
				<ChatContent />
			) : (
				<div className={cn(style.emptyChat)}>
					<img src={Logo} alt='' />
				</div>
			)}
		</AppContainer>
	)
}
