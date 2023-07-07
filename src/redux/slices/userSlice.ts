import { UserType } from '@/types/UserType'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: UserType = {
	id: '',
	firstName: '',
	lastName: '',
	avatar: '',
	email: ''
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addCurrentUser: (state, action: PayloadAction<UserType>) => {
			state.id = action.payload.id
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
			state.avatar = action.payload.avatar
			state.email = action.payload.email
		},
		clearCurrentUser: (state) => {
			state.id = ''
			state.firstName = ''
			state.lastName = ''
			state.avatar = ''
			state.email = ''
		}
	}
})

export const { addCurrentUser, clearCurrentUser } = userSlice.actions

export default userSlice.reducer
