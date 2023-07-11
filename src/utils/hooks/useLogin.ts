import { auth, db } from '@/config/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { FieldValues } from 'react-hook-form'
import { useAppDispatch } from './useAppDispatch'
import { addCurrentUser } from '@/redux/slices/userSlice'

export const useLogin = () => {
	const dispatch = useAppDispatch()

	const loginUser = async (data: FieldValues) => {
		await signInWithEmailAndPassword(auth, data.email, data.password)
		onAuthStateChanged(auth, async (currentuser) => {
			if (currentuser) {
				const response = await getDoc(doc(db, 'users', currentuser.uid))
				const responseData = response.data()
				const user = {
					id: responseData?.uid,
					firstName: responseData?.firstName,
					lastName: responseData?.lastName,
					email: responseData?.email,
					avatar: responseData?.photoURL
				}
				dispatch(addCurrentUser(user))
			}
		})
	}
	return {
		loginUser
	}
}
