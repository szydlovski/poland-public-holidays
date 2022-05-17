import { FixedHoliday, MovableHoliday } from "./types";

const holidays: (FixedHoliday | MovableHoliday)[] = [
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

export default holidays;
