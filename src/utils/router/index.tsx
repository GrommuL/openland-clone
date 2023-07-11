import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import {
	StartPage,
	RegisterPage,
	LoginPage,
	HomePage,
	NotFoundPage,
	UserPage
} from '@/pages'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoutes />,
		children: [
			{ path: '/', element: <HomePage /> },
			{ path: '/user', element: <UserPage /> }
		]
	},
	{ path: '/start', element: <StartPage /> },
	{ path: '/login', element: <LoginPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/*', element: <NotFoundPage /> }
])
