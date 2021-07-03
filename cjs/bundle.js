'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function addDays(date, days) {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
}

function isSameDay(date1, date2) {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
}

function getEasterDate(year) {
	// https://en.wikipedia.org/wiki/Date_of_Easter#Anonymous_Gregorian_algorithm
	const a = year % 19;
	const b = Math.floor(year / 100);
	const c = year % 100;
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

	const pad = (str) => (str + '').padStart(2, '0');

	const day = pad((p % 31) + 1);
	const month = pad(Math.floor(p / 31));
	year = year.toString().padStart(4, '0');


	return new Date(`${year}-${month}-${day}`);
}


function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

function validateYear(year) {
	if (isNumber(year) && year > 0) {
		year = new Date(year.toString().padStart(4, '0'));
	}
	try {
		return validateDate(year);
	} catch (error) {
		throw new Error(`Invalid year`);
	}
}

function validateDate(date) {
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

var holidayRules = [
	{
		name: 'New Year',
		namePL: 'Nowy Rok',
		date: '01-01',
		type: 'fixed',
	},
	{
		name: "Three Kings' Day",
		namePL: 'Święto Trzech Króli',
		date: '01-06',
		type: 'fixed',
	},
	{
		name: 'Labour Day',
		namePL: 'Święto Pracy',
		date: '05-01',
		type: 'fixed',
	},
	{
		name: '3 May Constitution Day',
		namePL: 'Narodowe Święto Konstytucji Trzeciego Maja',
		date: '05-03',
		type: 'fixed',
	},
	{
		name: 'Assumption of Mary',
		namePL: 'Wniebowzięcie Najświętszej Maryi Panny',
		date: '08-15',
		type: 'fixed',
	},
	{
		name: "All Saints' Day",
		namePL: 'Wszystkich Świętych',
		date: '11-01',
		type: 'fixed',
	},
	{
		name: 'National Independence Day',
		namePL: 'Narodowe Święto Niepodległości',
		date: '11-11',
		type: 'fixed',
	},
	{
		name: 'Christmas',
		namePL: 'Boże Narodzenie',
		date: '12-25',
		type: 'fixed',
	},
	{
		name: 'Second Day of Christmas',
		namePL: 'Boże Narodzenie - drugi dzień',
		date: '12-26',
		type: 'fixed',
	},
	{
		name: 'Easter Sunday',
		namePL: 'Niedziela Wielkanocna',
		type: 'movable',
		afterEaster: 0,
	},
	{
		name: 'Easter Monday',
		namePL: 'Poniedziałek Wielkanocny',
		type: 'movable',
		afterEaster: 1,
	},
	{
		name: 'Green Week',
		namePL: 'Zielone Świątki',
		type: 'movable',
		afterEaster: 49,
	},
	{
		name: 'Feast of Corpus Christi',
		namePL: 'Boże Ciało',
		type: 'movable',
		afterEaster: 60,
	},
];

function getHolidaysInYear(year) {
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

function getHolidayOnDate(date) {
	date = validateDate(date);
	return getHolidaysInYear(date.getFullYear()).find((holiday) =>
		isSameDay(holiday.date, date)
	);
}

function isHoliday(date) {
	date = validateDate(date);
	return getHolidayOnDate(date) !== undefined;
}

exports.getHolidayOnDate = getHolidayOnDate;
exports.getHolidaysInYear = getHolidaysInYear;
exports.isHoliday = isHoliday;
