import { Route, Routes } from 'react-router-dom'
import { StartPage, RegisterPage, LoginPage } from '@/pages'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/start' element={<StartPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Routes>
		</>
	)
}
