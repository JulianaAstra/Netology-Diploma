import { daysElements } from "./change-week-day.js";
import { getWeek } from "./get-week.js";

const getCurrentDate = () => {
    const week = getWeek();

    daysElements.forEach((element, idx) => {
        const day = week[idx];
        const dayNumber = day.day;
        const dayName = day.day_name;
        const dayMonth = day.month;
        const dayYear = day.year;
        const date = new Date(dayYear, dayMonth, dayNumber, 0);
     
        element.dataset.timestamp = date.getTime();
        element.querySelector('.page-nav__day-week').textContent = dayName;
        element.querySelector('.page-nav__day-number').textContent = dayNumber;
        element.classList.remove('page-nav__day_weekend');

        if (dayName === 'Сб' || dayName === 'Вс') {
            element.classList.add('page-nav__day_weekend');
        }
    })
}

getCurrentDate();

export { getCurrentDate };