import { GoHome, GoGear } from 'react-icons/go'
import { FaRegUser } from 'react-icons/fa6'
import { BiMessageRounded } from 'react-icons/bi'
import { IoNotificationsOutline } from 'react-icons/io5'

export const sidebarButtons = [
	{
		icon: GoHome,
		size: 24,
		href: '/'
	},
	{
		icon: FaRegUser,
		size: 22,
		href: '/'
	},
	{
		icon: BiMessageRounded,
		size: 24,
		href: '/',
		length: 3
	},
	{
		icon: IoNotificationsOutline,
		size: 24,
		href: '/',
		length: 1
	},
	{
		icon: GoGear,
		size: 24,
		href: '/'
	}
]
