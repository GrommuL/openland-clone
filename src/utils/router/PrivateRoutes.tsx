import { Layout } from '@/components/Layout'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
	const auth = true
	return auth ? <Layout /> : <Navigate to='/start' />
}
