import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { auth, db, storage } from '@/config/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { useAppDispatch } from './useAppDispatch'
import { addCurrentUser } from '@/redux/slices/userSlice'
import { FieldValues } from 'react-hook-form'

export const useRegister = () => {
	const dispatch = useAppDispatch()
	const dateMark = new Date().getTime()

	const createUser = async (data: FieldValues) => {
		const response = await createUserWithEmailAndPassword(
			auth,
			data.email,
			data.password
		)
		const storageRef = ref(
			storage,
			`${data.firstName + data.lastName + dateMark}`
		)

		await uploadBytesResumable(storageRef, data.avatar[0]).then(() => {
			getDownloadURL(storageRef).then(async (downloadUrl) => {
				await updateProfile(response.user, {
					displayName: `${data.firstName} ${data.lastName}`,
					photoURL: downloadUrl
				})
				await setDoc(doc(db, 'users', response.user.uid), {
					uid: response.user.uid,
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					photoURL: downloadUrl
				})
				dispatch(
					addCurrentUser({
						id: response.user.uid,
						firstName: data.firstName,
						lastName: data.lastName,
						email: data.email,
						avatar: downloadUrl
					})
				)
				await setDoc(doc(db, 'userChats', response.user.uid), {})
			})
		})
	}

	return {
		createUser
	}
}
