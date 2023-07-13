import cn from 'classnames'
import style from './SearchUser.module.scss'
import { CloseIcon } from '../UI/Icons/CloseIcon'
import { SearchUserItem } from '../SearchUserItem/SearchUserItem'
import { useSearchUser } from '@/utils/hooks/useSearchUser'

export const SearchUser = () => {
	const { handleSearch, handleSelect, searchValue, setSearchValue, user } =
		useSearchUser()

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
					title='To add a chat, select a user from the list below and click the button "Enter"'
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
