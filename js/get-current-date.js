import { navigationElement, daysElements } from "./change-week-day.js";
import { WEEK_DAYS } from "./constants.js";
import { getWeek } from "./get-week.js";

const getCurrentDate = () => {
    const currentDay = new Date();
    const week = getWeek();
    console.log(week);
}

getCurrentDate();

export { getCurrentDate };