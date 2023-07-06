import { Layout } from '@/components/Layout'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
	const auth = false
	return auth ? <Layout /> : <Navigate to='/start' />
}
