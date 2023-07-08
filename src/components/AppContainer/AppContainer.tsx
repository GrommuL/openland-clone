import cn from 'classnames'
import style from './AppContainer.module.scss'

interface AppContainerProps {
	children: React.ReactNode
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
	return <div className={cn(style.appContainer)}>{children}</div>
}
