import { AppContainer } from '@/components/AppContainer/AppContainer'
import cn from 'classnames'
import style from './HomePage.module.scss'
import { SearchUser } from '@/components/SearchUser'
import { ChatList } from '@/components/ChatList'

export const HomePage = () => {
	return (
		<AppContainer>
			<div className={cn(style.appSidebar)}>
				<div className={cn(style.appHeader)}>Chats</div>
				<SearchUser />
				<ChatList />
			</div>
			<div className={cn(style.appInfo)}>contact info</div>
		</AppContainer>
	)
}
