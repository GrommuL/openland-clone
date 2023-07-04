import cn from 'classnames'
import style from './Button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string
}

export const Button: React.FC<ButtonProps> = ({ label, type }) => {
	return (
		<button className={cn(style.button)} type={type}>
			{label}
		</button>
	)
}
