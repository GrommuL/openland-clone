import cn from 'classnames'
import style from './SearchUser.module.scss'
import { CloseIcon } from '../UI/Icons/CloseIcon'
import { useState } from 'react'
import { DocumentData, collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { SearchUserItem } from '../SearchUserItem/SearchUserItem'

export const SearchUser = () => {
	const [searchValue, setSearchValue] = useState('')
	const [user, setUser] = useState<DocumentData[] | null>(null)

	//Сделать кастомный хук

	const handleSearch = async () => {
		const users = collection(db, 'users')
		const data = await getDocs(users)
		const selectedUser = data?.docs.filter((item) => {
			return (
				item
					.data()
					.firstName.toLowerCase()
					.includes(searchValue.toLocaleLowerCase()) ||
				item
					.data()
					.lastName.toLowerCase()
					.includes(searchValue.toLocaleLowerCase())
			)
		})

		if (selectedUser) {
			setUser(selectedUser)
		}
		setSearchValue('')
	}

	const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		e.code === 'Enter' && handleSearch()
	}
	return (
		<div>
			<div className={cn(style.searchBox)}>
				<input
					className={cn(style.search)}
					type='text'
					placeholder='Search'
					value={searchValue}
					onKeyDown={handleKey}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				{searchValue && (
					<button
						className={cn(style.clear)}
						onClick={() => setSearchValue('')}
					>
						<CloseIcon />
					</button>
				)}
			</div>
			{user &&
				user.map((searchUser) => (
					<SearchUserItem
						user={searchUser.data()}
						key={searchUser.data().uid}
					/>
				))}
		</div>
	)
}
