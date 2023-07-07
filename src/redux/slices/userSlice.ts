import { AuthType } from '@/types/AuthType'
import { UserType } from '@/types/UserType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: AuthType = {
	access: false,
	currentUser: {
		id: '',
		firstName: '',
		lastName: '',
		avatar: '',
		email: ''
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addCurrentUser: (state, action: PayloadAction<UserType>) => {
			state.currentUser = action.payload
		},
		clearCurrentUser: (state) => {
			state.currentUser = {
				id: '',
				firstName: '',
				lastName: '',
				avatar: '',
				email: ''
			}
		},
		getAccess: (state, action: PayloadAction<boolean>) => {
			state.access = action.payload
		}
	}
})

export const { addCurrentUser, clearCurrentUser, getAccess } = userSlice.actions

export default userSlice.reducer
