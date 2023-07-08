import cn from 'classnames'
import style from './AuthInput.module.scss'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { RegisterValues } from '@/types/RegisterValues'

interface AuthInputProps {
	id: 'avatar' | 'firstName' | 'lastName' | 'email' | 'password'
	disabled?: boolean
	required?: boolean
	placeholder: string
	type: string
	register: UseFormRegister<
		RegisterValues | Pick<RegisterValues, 'email' | 'password'>
	>
	errors: FieldErrors
}

export const AuthInput: React.FC<AuthInputProps> = ({
	register,
	id,
	disabled,
	required,
	placeholder,
	type,
	errors
}) => {
	const emailObj = {
		required: {
			message: `${placeholder}, обязателен к заполнению`,
			value: true
		},
		pattern: {
			message: 'Напишите правильно свой Email',
			value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
		}
	}
	const otherObj = {
		required: {
			message: `${placeholder}, обязателен к заполнению`,
			value: true
		}
	}
	return (
		<div className={cn(style.box)}>
			<input
				className={cn(style.input)}
				id={id}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				required={required}
				{...register(id, id === 'email' ? emailObj : otherObj)}
			/>
			<ErrorMessage
				errors={errors}
				name={id}
				render={({ message }) => (
					<span className={cn(style.error)}>{message}</span>
				)}
			/>
		</div>
	)
}
