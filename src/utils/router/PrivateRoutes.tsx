import { Layout } from '@/components/Layout'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'

export const PrivateRoutes = () => {
	const auth = useAppSelector((state) => state.user.access)

	return auth ? <Layout /> : <Navigate to='/start' />
}
