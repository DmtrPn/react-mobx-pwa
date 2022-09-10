import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import getMinutes from 'date-fns/getMinutes';
import getHours from 'date-fns/getHours';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import format from 'date-fns/format';
import addWeeks from 'date-fns/addWeeks';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import addMinutes from 'date-fns/addMinutes';
import subMinutes from 'date-fns/subMinutes';
import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';
import isToday from 'date-fns/isToday';
import isValid from 'date-fns/isValid';
import isAfter from 'date-fns/isAfter';
import isBefore from 'date-fns/isBefore';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import addYears from 'date-fns/addYears';
import subYears from 'date-fns/subYears';
import parseISO from 'date-fns/parseISO';
import ru from 'date-fns/locale/ru';

import isNil from 'lodash/isNil';

export type DateType = Date | string | number;

// https://date-fns.org/v2.8.1/docs/format
export enum DateFormatItem {
    Year = 'yyyy',
    YearShort = 'yy',
    MonthNumber = 'MM',
    MonthStringShort = 'MMM',
    MonthString = 'MMMM',
    Day = 'dd',
    DayShort = 'd',
    WeekDay = 'EEEEEE',
    Hour = 'H',
    Minute = 'mm',
    Second = 'ss',
}

export const enum DateFormat {
    // @ts-ignore H:mm:ss
    Time = `${DateFormatItem.Hour}:${DateFormatItem.Minute}:${DateFormatItem.Second}`,
    // @ts-ignore dd.MM.yyyy
    DateWithDotSeparator = `${DateFormatItem.Day}.${DateFormatItem.MonthNumber}.${DateFormatItem.Year}`,
    // @ts-ignore dd MMMM yyyy
    DateWithMonthString = `${DateFormatItem.Day} ${DateFormatItem.MonthString} ${DateFormatItem.Year}`,
    // @ts-ignore yyyy-MM-dd
    DateWithDashSeparator = `${DateFormatItem.Year}-${DateFormatItem.MonthNumber}-${DateFormatItem.Day}`,
    // @ts-ignore dd/MM/yy
    DateWithSlashSeparator = `${DateFormatItem.Day}/${DateFormatItem.MonthNumber}/${DateFormatItem.YearShort}`,
    // @ts-ignore dd.MM.yyyy H:mm
    // tslint:disable-next-line:max-line-length
    DateWithTime = `${DateFormatItem.Day}.${DateFormatItem.MonthNumber}.${DateFormatItem.Year} ${DateFormatItem.Hour}:${DateFormatItem.Minute}`,
    // @ts-ignore EEEEEE,d
    WeekDayWithDay = `${DateFormatItem.WeekDay},${DateFormatItem.DayShort}`,
    // @ts-ignore dd MMMM
    DayWithMonthString = `${DateFormatItem.Day} ${DateFormatItem.MonthString}`,
}

export class DateHelper {

    // Нужно для Сафари тк там валидные даты инвалидны YYYY-MM-DD DD-MM-YYYY
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    public static createDate(value: string): Date {
        return parseISO(value);
    }

    public static getTime(date: DateType): string {
        return (new Date(date)).toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' });
    }

    public static format(value: DateType, formatParams: DateFormat | DateFormatItem): string {
        const date = new Date(value);
        return format(date, formatParams as unknown as string, { locale: ru });
    }

    public static getStartOfDay(value: DateType = new Date()): Date {
        const date = new Date(value);
        return startOfDay(date || new Date());
    }

    public static getEndOfDay(value?: DateType): Date {
        const date = value ? new Date(value) : new Date();
        return endOfDay(date);
    }

    public static getMinutes(value: DateType): number {
        return getMinutes(new Date(value));
    }

    public static getHours(value: DateType): number {
        return getHours(new Date(value));
    }

    public static getYear(value?: DateType): number {
        const date = value ? new Date(value) : new Date();
        return getYear(date);
    }

    public static getMonth(value?: DateType): number {
        const date = value ? new Date(value) : new Date();
        return getMonth(date);
    }

    public static addWeeks(value: DateType, count: number): Date {
        return addWeeks(new Date(value), count);
    }

    public static addMinutes(value: DateType, minutes: number): Date {
        return addMinutes(new Date(value), minutes);
    }

    public static subMinutes(value: DateType, minutes: number): Date {
        return subMinutes(new Date(value), minutes);
    }

    public static addDays(value: DateType, days: number): Date {
        return addDays(new Date(value), days);
    }

    public static addMonths(value: DateType, days: number): Date {
        return addMonths(new Date(value), days);
    }

    public static subMonths(value: DateType, days: number): Date {
        return subMonths(new Date(value), days);
    }

    public static subDays(value: DateType, days: number): Date {
        return subDays(new Date(value), days);
    }

    public static addYears(value: DateType, years: number): Date {
        return addYears(new Date(value), years);
    }

    public static subYears(value: DateType, years: number): Date {
        return subYears(new Date(value), years);
    }

    public static isAfter(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isAfter(date, dateToCompare);
    }

    public static isBefore(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return isBefore(date, dateToCompare);
    }

    public static isSameOrAfter(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || isAfter(date, dateToCompare);
    }

    public static isSameOrBefore(value: DateType, valueToCompare: DateType): boolean {
        const date = new Date(value);
        const dateToCompare = new Date(valueToCompare);
        return date.getTime() === dateToCompare.getTime() || isBefore(date, dateToCompare);
    }

    public static isToday(value: DateType): boolean {
        const date = new Date(value);
        return isToday(date);
    }

    public static isValid(value: DateType): boolean {
        const date = new Date(value);
        return isValid(date);
    }

    public static isSameDay(valueLeft: DateType, valueRight: DateType): boolean {
        return isSameDay(new Date(valueLeft), new Date(valueRight));
    }

    public static isSameMonth(valueLeft: DateType, valueRight: DateType): boolean {
        return isSameMonth(new Date(valueLeft), new Date(valueRight));
    }

    public static endOfWeek(value: DateType): Date {
        const date = new Date(value);
        return endOfWeek(date, { weekStartsOn: 1 });
    }

    public static startOfWeek(value: DateType): Date {
        const date = new Date(value);
        return startOfWeek(date, { weekStartsOn: 1 });
    }

    public static endOfMonth(value: DateType): Date {
        const date = new Date(value);
        return endOfMonth(date);
    }

    public static startOfMonth(value: DateType): Date {
        const date = new Date(value);
        return startOfMonth(date);
    }

    public static setDate(
        value: DateType,
        { year, month, day }: { year?: number; month?: number; day?: number },
    ): Date {
        const date = new Date(value);

        if (!isNil(year)) {
            date.setFullYear(year);
        }
        if (!isNil(day)) {
            date.setDate(day);
        }
        if (!isNil(month)) {
            date.setMonth(month);
        }

        return date;
    }

}
