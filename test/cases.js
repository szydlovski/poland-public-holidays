const invalidDates = [
	'notavaliddate',
	'16',
	undefined,
	NaN,
	null,
	true,
	false,
	1,
	() => {},
	new Date(''),
	Date.now(),
];
const invalidYears = [
	'notavaliddate',
	'16',
	undefined,
	NaN,
	null,
	true,
	false,
	() => {},
	new Date(''),
	Date.now(),
	-1,
	-500,
];
const validDates = [
	'2020-03-20',
	'Fri Dec 11 2020 02:06:04 GMT+0100 (Central European Standard Time)',
	new Date(),
	new Date('2019-07-21'),
];
const validYears = [...validDates, 2020, 1950, 150, 3827, 15];
const holidaysInYears = [
	{
		year: 2020,
		holidayName: 'Easter Sunday',
		holidayDate: '2020-04-12',
	},
	{
		year: 2050,
		holidayName: 'Easter Sunday',
		holidayDate: '2050-04-10',
	},
	{
		year: 2015,
		holidayName: 'Green Week',
		holidayDate: '2015-05-24',
	},
	{
		year: 1950,
		holidayName: 'Feast of Corpus Christi',
		holidayDate: '1950-06-08',
	},
	{
		year: 1994,
		holidayName: 'Labour Day',
		holidayDate: '1994-05-01',
	},
];
const yearsInPastAndFuture = [
	32,
	299,
	603,
	1271,
	1700,
	1893,
	1944,
	2001,
	2920,
	3533,
];
const existingHolidays = [
	{
		date: '2006-01-06',
		name: "Three Kings' Day"
	},
	{
		date: '1950-05-28',
		name: "Green Week"
	},
	{
		date: '1990-12-25',
		name: "Christmas"
	},
];

const nonHolidays = [
	'1978-10-02', '2021-02-13', '2020-12-07', '1919-06-24'
]

export {
	invalidDates,
	invalidYears,
	validDates,
	validYears,
	holidaysInYears,
	yearsInPastAndFuture,
	existingHolidays,
	nonHolidays
};
