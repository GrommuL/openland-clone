import * as yup from 'yup'

export const registerSchema = yup.object().shape({
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('Last Name is required'),
	email: yup.string().email().required('Email is required'),
	password: yup.string().min(4).max(10).required('Password is required')
})
