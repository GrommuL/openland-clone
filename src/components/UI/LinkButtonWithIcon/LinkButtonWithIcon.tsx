import { Link } from 'react-router-dom'
import { IconType } from 'react-icons'
import cn from 'classnames'
import style from './LinkButtonWithIcon.module.scss'
import { Counter } from '../Counter'

interface LinkButtonWithIconProps {
	icon: IconType
	size: number
	href: string
	length?: number
}

export const LinkButtonWithIcon: React.FC<LinkButtonWithIconProps> = ({
	icon: Icon,
	size,
	href,
	length
}) => {
	return (
		<Link className={cn(style.btn)} to={href}>
			<Icon size={size} />
			{length && <Counter length={length} />}
		</Link>
	)
}
