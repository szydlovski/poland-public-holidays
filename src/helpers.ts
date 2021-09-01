export function addDays(date: Date, days: number) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

export function isSameDay(date1: Date, date2: Date) {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

export function getEasterDate(yearInput: number) {
	// https://en.wikipedia.org/wiki/Date_of_Easter#Anonymous_Gregorian_algorithm
	const a = yearInput % 19;
	const b = Math.floor(yearInput / 100);
	const c = yearInput % 100;
	const d = Math.floor(b / 4);
	const e = b % 4;
	const f = Math.floor((b + 8) / 25);
	const g = Math.floor((b - f + 1) / 3);
	const h = (19 * a + b - d - g + 15) % 30;
	const i = Math.floor(c / 4);
	const k = c % 4;
	const l = (32 + 2 * e + 2 * i - h - k) % 7;
	const m = Math.floor((a + 11 * h + 22 * l) / 451);
	const p = h + l - 7 * m + 114;

	const pad = (n: number) => (n + '').padStart(2, '0');

	const day = pad((p % 31) + 1);
	const month = pad(Math.floor(p / 31));
	const year = yearInput.toString().padStart(4, '0');


	return new Date(`${year}-${month}-${day}`);
}


export function isNumber(value: any) {
	return typeof value === 'number' && isFinite(value);
}

export function validateYear(year: Date | number): Date {
	if (isNumber(year) && year > 0) {
		return validateYear(new Date(year.toString().padStart(4, '0')));
	}
	try {
		return validateDate(year as Date);
	} catch (error) {
		throw new Error(`Invalid year`);
	}
}

export function validateDate(date: Date | string): Date {
	let dateObject;

	if (date instanceof Date) {
		dateObject = date;
	} else if (typeof date === 'string') {
		dateObject = new Date(date);
	}

	if (dateObject !== undefined && dateObject.toString() !== 'Invalid Date') {
		return dateObject;
	} else {
		throw new Error(`Invalid date`);
	}
}