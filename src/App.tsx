import { Route, Routes } from 'react-router-dom'
import { StartPage, RegisterPage, LoginPage, HomePage } from '@/pages'
import { PrivateRoutes } from './utils/router/PrivateRoutes'

export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<PrivateRoutes />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/start' element={<StartPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</>
	)
}
