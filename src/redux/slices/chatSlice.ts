import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialStateUserType {
	uid: string
	firstName: string
	lastName: string
	photoURL: string
	email: string
}

interface InitialStateType {
	chatId: string
	user: InitialStateUserType
}

const initialState: InitialStateType = {
	chatId: '',
	user: {
		uid: '',
		firstName: '',
		lastName: '',
		photoURL: '',
		email: ''
	}
}

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		getChat: (state, action: PayloadAction<InitialStateType>) => {
			state.chatId = action.payload.chatId
			state.user.uid = action.payload.user.uid
			state.user.firstName = action.payload.user.firstName
			state.user.lastName = action.payload.user.lastName
			state.user.photoURL = action.payload.user.photoURL
			state.user.email = action.payload.user.email
		}
	}
})

export const { getChat } = chatSlice.actions

export default chatSlice.reducer
