import { getMonth } from "./get-month.js";
import { DAYS_IN_WEEK, WEEK_DAYS } from "../constants.js";

const getWeek = () => {
    const currentDay = new Date();
    const currentMonth = currentDay.getMonth();
    const dayNumber = currentDay.getDate() - 1;
    const currentDayCount = currentDay.getDay();

    const month = getMonth(currentDay, currentMonth);
    const weekMassive = [];
    let count = currentDayCount;

    if ((month.length - dayNumber) >= DAYS_IN_WEEK) {
        const week = month.slice(dayNumber, dayNumber + DAYS_IN_WEEK);
        week.forEach((day) => {
            const dayWithName = {};
            if (count > 6) {
                count = 0;
            }
            const dayCount = WEEK_DAYS[count];
            dayWithName['day'] = day;
            dayWithName['day_name'] = dayCount.name;
            dayWithName['month'] = currentMonth;
            dayWithName['year'] = currentDay.getFullYear();
            weekMassive.push(dayWithName);
            count++;
        });
        return weekMassive;
    } 

    if ((month.length - dayNumber) <= DAYS_IN_WEEK) {
        const nextMonth = getMonth(currentDay, currentMonth + 1);
        const week = month.slice(dayNumber);
        week.forEach((day) => {
            const dayWithName = {};
            if (count > 6) {
                count = 0;
            }
            const dayCount = WEEK_DAYS[count];
            dayWithName['day'] = day;
            dayWithName['day_name'] = dayCount.name;
            dayWithName['month'] = currentMonth;
            dayWithName['year'] = currentDay.getFullYear();
            weekMassive.push(dayWithName);
            count++;
        });

        const daysInNextMonth = DAYS_IN_WEEK - week.length;
        const nextWeek = nextMonth.slice(0, daysInNextMonth);

        nextWeek.forEach((day) => {
            const dayWithName = {};
            if (count > 6) {
                count = 0;
            }
            const dayCount = WEEK_DAYS[count];
            dayWithName['day'] = day;
            dayWithName['day_name'] = dayCount.name;
            dayWithName['month'] = currentMonth + 1;
            dayWithName['year'] = currentDay.getFullYear();
            weekMassive.push(dayWithName);
            count++;
        });
        
        return weekMassive;
    }
}

export { getWeek };
