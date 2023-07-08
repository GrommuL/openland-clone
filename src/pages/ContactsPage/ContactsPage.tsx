import style from './ContactsPage.module.scss'

export const ContactsPage = () => {
	return (
		<div className={style.appContent}>
			<div className={style.appSidebar}>
				<div className={style.appHeader}>Contacts</div>
				<div className={style.appSearchBox}>
					<input
						className={style.appSearch}
						type='search'
						placeholder='Search'
					/>
				</div>
				<div>
					<div></div>
				</div>
			</div>
			<div className={style.appInfo}>contact info</div>
		</div>
	)
}
