export interface Holiday {
	name: string,
	namePL: string,
	date: Date,
}

export interface HolidayConfig {
	name: string,
	namePL: string,
	type: string,
}

export interface FixedHoliday extends HolidayConfig {
	type: 'fixed',
	date: string
}

export interface MovableHoliday extends HolidayConfig {
	type: 'movable',
	afterEaster: number;
}