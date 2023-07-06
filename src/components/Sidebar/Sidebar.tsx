import cn from 'classnames'
import style from './Sidebar.module.scss'
import Logo from '@/assets/Logo.png'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { LinkButtonWithIcon } from '../UI/LinkButtonWithIcon'
import { sidebarButtons } from '@/constants/sidebarButtons'

export const Sidebar = () => {
	return (
		<aside className={cn(style.sidebar)}>
			<div>
				<Link className={cn(style.logoBtn)} to='/'>
					<img className={cn(style.logo)} src={Logo} alt='Logo' />
				</Link>
				{sidebarButtons.map((btn) => (
					<LinkButtonWithIcon
						icon={btn.icon}
						size={btn.size}
						href={btn.href}
						length={btn.length}
					/>
				))}
			</div>
			<button className={cn(style.btn)}>
				<BiLogOut size={24} />
			</button>
		</aside>
	)
}
