import cn from 'classnames'
import style from './Sidebar.module.scss'
import Logo from '@/assets/Logo.png'
import { Link } from 'react-router-dom'
import { GoHome, GoGear } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa6'
import { BiSolidMessage, BiLogOut } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'

export const Sidebar = () => {
	return (
		<aside className={cn(style.sidebar)}>
			<div>
				<Link className={cn(style.logoBtn)} to='/'>
					<img className={cn(style.logo)} src={Logo} alt='Logo' />
				</Link>
				<Link className={cn(style.btn)} to='/'>
					<GoHome size={24} />
				</Link>
				<Link className={cn(style.btn)} to='/'>
					<FaRegUser size={22} />
				</Link>
				<Link className={cn(style.btn)} to='/'>
					<BiSolidMessage size={24} />
				</Link>
				<Link className={cn(style.btn)} to='/'>
					<IoNotificationsOutline size={24} />
				</Link>
				<Link className={cn(style.btn)} to='/'>
					<GoGear size={24} />
				</Link>
			</div>
			<button className={cn(style.btn)}>
				<BiLogOut size={24} />
			</button>
		</aside>
	)
}
