import { RouterProvider } from 'react-router-dom'
import { router } from './utils/router'

export const App = () => {
	return <RouterProvider router={router} />
}
