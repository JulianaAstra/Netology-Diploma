import { getMonth } from "./get-month.js";
import { DAYS_IN_WEEK, WEEK_DAYS } from "./constants.js";

const getWeek = () => {
    const currentDay = new Date(2023, 3, 27);
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
            dayWithName[day] = dayCount.name;
            weekMassive.push(dayWithName);
            count++;
        });
        return weekMassive;
    } 

    if ((month.length - dayNumber) <= DAYS_IN_WEEK) {
        const nextMonth = getMonth(currentDay, currentMonth + 1);
        const week = month.slice(dayNumber);
        const daysInNextMonth = DAYS_IN_WEEK - week.length;
        const nextWeek = nextMonth.slice(0, daysInNextMonth);
        const newWeek = [...week, ...nextWeek];
        
        newWeek.forEach((day) => {
            const dayWithName = {};
            if (count > 6) {
                count = 0;
            }
            const dayCount = WEEK_DAYS[count];
            dayWithName[day] = dayCount.name;
            weekMassive.push(dayWithName);
            count++;
        });
        return weekMassive;
    }
}

export { getWeek };
