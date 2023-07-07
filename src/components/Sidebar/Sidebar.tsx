import cn from 'classnames'
import style from './Sidebar.module.scss'
import Logo from '@/assets/Logo.png'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { LinkButtonWithIcon } from '../UI/LinkButtonWithIcon'
import { sidebarButtons } from '@/constants/sidebarButtons'
import { ButtonWithIcon } from '../UI/ButtonWithIcon'

export const Sidebar = () => {
	return (
		<aside className={cn(style.sidebar)}>
			<div>
				<Link className={cn(style.logoBtn)} to='/'>
					<img className={cn(style.logo)} src={Logo} alt='Logo' />
				</Link>
				{sidebarButtons.map((btn) => (
					<LinkButtonWithIcon
						key={btn.label}
						icon={btn.icon}
						size={btn.size}
						href={btn.href}
						length={btn.length}
					/>
				))}
			</div>
			<ButtonWithIcon icon={BiLogOut} size={24} />
		</aside>
	)
}
