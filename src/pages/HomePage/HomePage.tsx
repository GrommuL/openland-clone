import { auth, db } from '@/config/firebase'
import { addCurrentUser } from '@/redux/slices/userSlice'
import { useAppDispatch } from '@/utils/hooks/useAppDispatch'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect } from 'react'

export const HomePage = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
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
	}, [dispatch])
	return <div>HomePage</div>
}
