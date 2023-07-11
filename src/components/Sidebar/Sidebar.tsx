import cn from 'classnames'
import style from './Sidebar.module.scss'
import Logo from '@/assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { LinkButtonWithIcon } from '../UI/LinkButtonWithIcon'
import { sidebarButtons } from '@/constants/sidebarButtons'
import { ButtonWithIcon } from '../UI/ButtonWithIcon'
import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { clearCurrentUser, getAccess } from '@/redux/slices/userSlice'
import { clearChat } from '@/redux/slices/chatSlice'

export const Sidebar = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const logOut = () => {
		signOut(auth)
		dispatch(clearCurrentUser())
		dispatch(clearChat())
		dispatch(getAccess(false))
		navigate('/start')
	}
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
			<ButtonWithIcon icon={BiLogOut} size={24} onClick={logOut} />
		</aside>
	)
}
