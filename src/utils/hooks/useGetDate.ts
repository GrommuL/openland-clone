export const useGetDate = () => {
	const getTodayDateFromSeconds = (seconds: number) => {
		const today = new Date(seconds * 1000)
		const year = today.getFullYear()
		const month = today.getMonth() + 1
		const day = today.getDate()
		return {
			year,
			month,
			day
		}
	}
	return { getTodayDateFromSeconds }
}
