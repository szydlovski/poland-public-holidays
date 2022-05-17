import { expect } from "chai";

import {
	isHoliday,
	getHolidaysInYear,
	getHolidayOnDate,
} from '..';

import {
	invalidDates,
	invalidYears,
	validDates,
	validYears,
	holidaysInYears,
	yearsInPastAndFuture,
	existingHolidays,
	nonHolidays
} from './holidays.cases';

describe('getHolidayOnDate', function () {
	it('accepts valid Date objects and date strings as arguments', function () {
		for (const validDate of validDates) {
			expect(
				function () {
					getHolidayOnDate(validDate);
				}
			).to.not.throw();
		}
	});

	it('otherwise throws an error', function () {
		for (const invalidDate of invalidDates) {
			expect(
				function () {
					getHolidayOnDate(invalidDate);
				}
			).to.throw(Error, 'Invalid date');
		}
	});

	it('returns an object with information about a holiday if there is a holiday on the provided date', function () {
		for (const testCase of existingHolidays) {
			const { name, date } = testCase;
			const holiday = getHolidayOnDate(date);
			expect(holiday).to.not.equal(undefined);
			expect(holiday?.namePL).to.not.equal(undefined);
			expect(holiday?.date).to.be.a('Date');
			expect(holiday?.name).to.equal(name);
		}
	});
	it('returns undefined if there is no holiday on the provided date', function () {
		for (const date of nonHolidays) {
			const holiday = getHolidayOnDate(date);
			expect(holiday).to.equal(undefined);
		}
	});
});

describe('isHoliday', function () {
	it('accepts valid Date objects and date strings as arguments', function () {
		for (const validDate of validDates) {
			expect(
				function () {
					isHoliday(validDate);
				}
			).to.not.throw();
		}
	});

	it('otherwise throws an error', function () {
		for (const invalidDate of invalidDates) {
			expect(
				function () {
					isHoliday(invalidDate);
				}
			).to.throw(Error, 'Invalid date');
		}
	});

	it('returns true if there is a holiday on the provided date', function () {
		for (const {date} of existingHolidays) {
			expect(isHoliday(date)).to.equal(true);
		}
	});
	it('returns false if there is no holiday on the provided date', function () {
		for (const date of nonHolidays) {
			expect(isHoliday(date)).to.equal(false);
		}
	});
});

describe('getHolidaysInYear', function () {
	it('accepts valid Date objects, date strings and positive numbers as arguments', function () {
		for (const validYear of validYears) {
			expect(
				function () {
					getHolidaysInYear(validYear);
				}
			).to.not.throw();
		}
	});

	it('otherwise throws an error', function () {
		for (const invalidYear of invalidYears) {
			expect(
				function () {
					getHolidaysInYear(invalidYear);
				}
			).to.throw(Error, 'Invalid year');
		}
	});

	it('returns correct dates of public holidays for the given year', function () {
		for (const testCase of holidaysInYears) {
			const { year, holidayName, holidayDate } = testCase;
			const holidaysInYear = getHolidaysInYear(year);
			const holiday = holidaysInYear.find(({ name }) => name === holidayName);
			expect(holiday).to.not.equal(undefined);
			expect(holiday?.date.toISOString().slice(0, 10)).to.equal(holidayDate);
		}
	});

	it('returns names of public holidays in English and Polish', function () {
		for (const year of yearsInPastAndFuture) {
			const holidays = getHolidaysInYear(year);
			for (const holiday of holidays) {
				expect(holiday.name).to.not.equal(undefined);
				expect(holiday.namePL).to.not.equal(undefined);
				expect(holiday.name).to.not.equal(holiday.namePL);
			}
		}
	});

	it('returns valid dates for years in the past and future', function () {
		for (const year of yearsInPastAndFuture) {
			const holidays = getHolidaysInYear(year);
			for (const holiday of holidays) {
				expect(holiday.date.toString()).to.not.contain('Invalid');
			}
		}
	});
});
