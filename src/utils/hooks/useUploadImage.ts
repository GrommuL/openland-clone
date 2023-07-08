import { useState } from 'react'

export const useUploadImgage = () => {
	const [avatar, setAvatar] = useState<File>()
	const getUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const img = e.target.files[0]
			setAvatar(img)
		}
	}
	return {
		avatar,
		getUploadImage
	}
}
