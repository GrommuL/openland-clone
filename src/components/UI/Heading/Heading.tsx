import cn from 'classnames'
import style from './Heading.module.scss'

interface HeadingProps {
	title: string
	descirption: string
}

export const Heading: React.FC<HeadingProps> = ({ title, descirption }) => {
	return (
		<div className={cn(style.info)}>
			<h1 className={cn(style.title)}>{title}</h1>
			<p className={cn(style.description)}>{descirption}</p>
		</div>
	)
}
