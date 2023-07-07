import { GoHome, GoGear } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa6'
import { BiMessageRounded } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'

export const sidebarButtons = [
	{
		icon: GoHome,
		size: 24,
		href: '/',
		label: 'home'
	},
	{
		icon: FaRegUser,
		size: 20,
		href: '/',
		label: 'contacts'
	},
	{
		icon: BiMessageRounded,
		size: 24,
		href: '/',
		length: 3,
		label: 'messages'
	},
	{
		icon: IoNotificationsOutline,
		size: 24,
		href: '/',
		length: 1,
		label: 'notification'
	},
	{
		icon: GoGear,
		size: 24,
		href: '/',
		label: 'settings'
	}
]
