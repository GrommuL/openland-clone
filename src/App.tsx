import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './utils/router/PrivateRoutes'
import {
	StartPage,
	RegisterPage,
	LoginPage,
	HomePage,
	NotFoundPage,
	ContactsPage
} from '@/pages'

export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path='/' element={<HomePage />} />
					<Route path='/contacts' element={<ContactsPage />} />
				</Route>
				<Route path='/start' element={<StartPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
		</>
	)
}
