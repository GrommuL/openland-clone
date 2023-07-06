import cn from 'classnames'
import style from './ButtonWithIcon.module.scss'
import { IconType } from 'react-icons'

interface ButtonWithIconProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: IconType
	size?: number
	onClick?: () => void
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	icon: Icon,
	size,
	onClick,
	type = 'button'
}) => {
	return (
		<button className={cn(style.btn)} type={type} onClick={onClick}>
			<Icon size={size} />
		</button>
	)
}
