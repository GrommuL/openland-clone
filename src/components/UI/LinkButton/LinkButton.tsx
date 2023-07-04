import { Link } from 'react-router-dom'
import style from './LinkButton.module.scss'
import cn from 'classnames'

interface LinkButtonProps {
	label: string
	href: string
	grey?: boolean
}

export const LinkButton: React.FC<LinkButtonProps> = ({
	label,
	href,
	grey
}) => {
	return (
		<Link className={cn(style.button, grey && style.buttonGrey)} to={href}>
			{label}
		</Link>
	)
}
