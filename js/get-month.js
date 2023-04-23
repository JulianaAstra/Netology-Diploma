import { SHORT_MONTHS, LEAP_YEAR } from "./constants.js";

const getMonth = (currentDay, currentMonth) => {
    const month = [];

    if (currentMonth === 1 && currentDay.getFullYear() !== LEAP_YEAR) {
        const daysInMonth = 28;
        for (let i = 1; i <= daysInMonth; i++) {
            month.push(i);
        }
        return month;
    }

    if (currentMonth === 1 && currentDay.getFullYear() === LEAP_YEAR) {
        const daysInMonth = 29;
        for (let i = 1; i <= daysInMonth; i++) {
            month.push(i);
        }
        return month;
    }

    if (SHORT_MONTHS.some((month) => month === currentMonth)) {
        const daysInMonth = 30;
        for (let i = 1; i <= daysInMonth; i++) {
            month.push(i);
        }
        return month;
    }

    const daysInMonth = 31;
        for (let i = 1; i <= daysInMonth; i++) {
            month.push(i);
        }
    return month;
    
}

export { getMonth };
