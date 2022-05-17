import {
	isSameDay,
	addDays,
	getEasterDate,
	validateDate,
	validateYear,
} from './helpers';
import holidayRules from './holidays';
import { Holiday } from './types';

export function getHolidaysInYear(year: any): Holiday[] {
	const yearDate = validateYear(year);
	const yearString = yearDate.getFullYear().toString().padStart(4, '0');
	const yearNumber = parseInt(yearString);
	const easterDate = getEasterDate(yearNumber);
	return holidayRules
		.map((holiday) => {
			let date;
			if (holiday.type === 'fixed') {
				date = new Date(`${yearString}-${holiday.date}`);
			} else {
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

export function getHolidayOnDate(dateInput: any) {
	const date = validateDate(dateInput);
	return getHolidaysInYear(date.getFullYear()).find((holiday) =>
		isSameDay(holiday.date, date)
	);
}

export function isHoliday(dateInput: any) {
	const date = validateDate(dateInput);
	return getHolidayOnDate(date) !== undefined;
}

export function isWeekend(date: Date): boolean {
	return [0, 6].includes(date.getDay());
}

export function isWeekendOrHoliday(date: Date): boolean {
	return isWeekend(date) || isHoliday(date);
}

export function isWorkingDay(date: Date): boolean {
	return !isWeekendOrHoliday(date);
}
