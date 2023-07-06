import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import cn from 'classnames'
import style from './Layout.module.scss'

export const Layout = () => {
	return (
		<div className={cn(style.layout)}>
			<Sidebar />
			<Outlet />
		</div>
	)
}
