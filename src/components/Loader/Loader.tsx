import style from './Loader.module.scss'

export const Loader = () => {
	return (
		<div className={style.container}>
			<svg className={style.svg}>
				<circle className={style.circle} cx='15' cy='15' r='15'></circle>
			</svg>
		</div>
	)
}
