import cn from 'classnames'
import style from './Counter.module.scss'

interface CounterProps {
	length: number
}

export const Counter: React.FC<CounterProps> = ({ length }) => {
	return <div className={cn(style.counter)}>{length}</div>
}
