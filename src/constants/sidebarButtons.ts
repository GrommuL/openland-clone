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
		href: '/user',
		label: 'user'
	},
	{
		icon: BiMessageRounded,
		size: 24,
		href: '/messages',
		length: 3,
		label: 'messages'
	},
	{
		icon: IoNotificationsOutline,
		size: 24,
		href: '/notification',
		length: 1,
		label: 'notification'
	},
	{
		icon: GoGear,
		size: 24,
		href: '/settings',
		label: 'settings'
	}
]
