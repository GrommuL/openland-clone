import cn from 'classnames'
import style from './SearchUser.module.scss'
import { CloseIcon } from '../UI/Icons/CloseIcon'
import { useState } from 'react'
import {
	DocumentData,
	collection,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	setDoc,
	updateDoc
} from 'firebase/firestore'
import { db } from '@/config/firebase'
import { SearchUserItem } from '../SearchUserItem/SearchUserItem'
import { useAppSelector } from '@/utils/hooks/useAppSelector'

export const SearchUser = () => {
	const currentUser = useAppSelector((state) => state.user.currentUser)
	const [searchValue, setSearchValue] = useState('')
	const [user, setUser] = useState<DocumentData[] | null>(null)

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

	const handleSelect = async (id: string) => {
		const selectedSearchUser = user?.find((useritem) => {
			return useritem.data().uid === id
		})
		const combinedId =
			currentUser.id > selectedSearchUser?.data().uid
				? currentUser.id + selectedSearchUser?.data().uid
				: selectedSearchUser?.data().uid + currentUser.id

		try {
			const response = await getDoc(doc(db, 'chats', combinedId))
			if (!response.exists()) {
				await setDoc(doc(db, 'chats', combinedId), { messages: [] })

				await updateDoc(doc(db, 'userChats', currentUser.id), {
					[combinedId + '.userInfo']: {
						uid: selectedSearchUser?.data().uid,
						firstName: selectedSearchUser?.data().firstName,
						lastName: selectedSearchUser?.data().lastName,
						photoURL: selectedSearchUser?.data().photoURL
					},
					[combinedId + '.date']: serverTimestamp()
				})
				await updateDoc(doc(db, 'userChats', selectedSearchUser?.data().uid), {
					[combinedId + '.userInfo']: {
						uid: currentUser.id,
						firstName: currentUser.firstName,
						lastName: currentUser.lastName,
						photoURL: currentUser.avatar
					},
					[combinedId + '.date']: serverTimestamp()
				})
			}
			setUser(null)
		} catch (error) {
			console.log(error)
		}
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
						onClick={() => handleSelect(searchUser.data().uid)}
						user={searchUser.data()}
						key={searchUser.data().uid}
					/>
				))}
		</div>
	)
}
