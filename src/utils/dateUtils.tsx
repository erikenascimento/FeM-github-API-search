export interface IFormattedDate {
	day: string;
	month: string;
	year: string;
}

export const formatDate = (
	dateString: string | null | undefined
): IFormattedDate | string => {
	if (!dateString) {
		return "Date";
	}

	try {
		const date = new Date(dateString);
		const options: Intl.DateTimeFormatOptions = {
			day: "numeric",
			month: "short",
			year: "numeric",
		};
		const formattedDate = date
			.toLocaleDateString(undefined, options)
			.split(" ");

		return {
			day: formattedDate[0],
			month: formattedDate[1],
			year: formattedDate[2],
		};
	} catch (error) {
		console.error("Error formatting date:", error);
		return "Date";
	}
};
