import {
	isSameDay,
	addDays,
	getEasterDate,
	validateDate,
	validateYear,
} from './helpers.js';
import holidayRules from './holidays.js';

export function getHolidaysInYear(year) {
	const yearDate = validateYear(year);
	const yearString = yearDate.getFullYear().toString().padStart(4, '0');
	const yearNumber = parseInt(yearString);
	const easterDate = getEasterDate(yearNumber);
	return holidayRules
		.map((holiday) => {
			let date;
			if (holiday.type === 'fixed') {
				date = new Date(`${yearString}-${holiday.date}`);
			} else if (holiday.type === 'movable') {
				date = new Date(addDays(easterDate, holiday.afterEaster));
			}
			const { name, namePL } = holiday;
			return {
				name,
				namePL,
				date,
			};
		})
		.sort((a, b) => (a.date < b.date ? -1 : 1));
}

export function getHolidayOnDate(date) {
	date = validateDate(date);
	return getHolidaysInYear(date.getFullYear()).find((holiday) =>
		isSameDay(holiday.date, date)
	);
}

export function isHoliday(date) {
	date = validateDate(date);
	return getHolidayOnDate(date) !== undefined;
}
