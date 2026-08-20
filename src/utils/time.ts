import type { TimeFormat } from '../types';

export interface TimeState {
  hours: string;
  minutes: string;
  seconds: string;
  ampm: string;
  dayName: string;
  dayNumber: string;
  monthName: string;
  year: string;
  fullDateString: string;
}

export const getTimeState = (date: Date = new Date(), format: TimeFormat = '12h'): TimeState => {
  let rawHours = date.getHours();
  let ampm = '';

  if (format === '12h') {
    ampm = rawHours >= 12 ? 'PM' : 'AM';
    rawHours = rawHours % 12;
    if (rawHours === 0) rawHours = 12;
  }

  const hours = String(rawHours).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const dayNames = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];

  const dayName = dayNames[date.getDay()];
  const dayNumber = String(date.getDate());
  const monthName = monthNames[date.getMonth()];
  const year = String(date.getFullYear());

  const fullDateString = `${dayName}, ${dayNumber} ${monthName} ${year}`;

  return {
    hours,
    minutes,
    seconds,
    ampm,
    dayName,
    dayNumber,
    monthName,
    year,
    fullDateString,
  };
};
