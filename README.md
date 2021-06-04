# poland-public-holidays

A small but comprehensive, fully tested library that computes the dates of public holidays in Poland.

# Usage

```
npm install poland-public-holidays
```

```javascript
const {isHoliday, getHolidaysInYear, getHolidayOnDate} = require('poland-public-holidays')

// accepts valid date strings
isHoliday('2018-05-01') // true - labor day, a fixed holiday

// or Date objects
isHoliday(new Date('2020-04-12')) // true - easter, a movable holiday
isHoliday(new Date('2020-12-03')) // false - not a public holiday

getHolidayOnDate('2016-05-26').name // Feast of Corpus Christi
getHolidayOnDate('1978-10-02') // undefined - not a public holiday
getHolidayOnDate(new Date('1990-12-25')).name // Christmas
getHolidayOnDate(new Date('2018-11-09')) // undefined - not a public holiday

const holidaysIn2020 = getHolidaysInYear(2020);
holidaysIn2020.length // 13
holidaysIn2020[0].name // New Year
holidaysIn2020[0].namePL // Nowy Rok
holidaysIn2020[0].date // Wed Jan 01 2020 01:00:00 GMT+0100 (Central European Standard Time)
```

# API

## getHolidaysInYear(year)

Accepts a valid `Date` object, a valid ISO8601 date string or a positive number (below 275760, the maximum year in JS). Returns an array of objects containing information about public holidays in the given year. The holiday objects will have the following properties:
- `date` - a `Date` instance set to the day when the holiday is observed
- `name` - the English name of the holiday
- `namePL` - the Polish name of the holiday

## isHoliday(date)

Accepts a valid `Date` object or a valid ISO8601 date string. Returns `true` if there is a public holiday on the given date, and `false` if there is not.

## getHolidayOnDate(date)

Accepts a valid `Date` object or a valid ISO8601 date string. Returns an object with information about the holiday if there is a public holiday on the given date, and `undefined` if there is not. The object will have the same properties as the ones in the array returned by `getHolidaysInYear`.

# License

Copyright 2021 Kamil Szydlowski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.