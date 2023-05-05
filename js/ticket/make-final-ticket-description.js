import { filmName, seats, seanceTime, hallName } from "./ticket.js";

const filmNameElement = document.querySelector('.ticket__title');
const seatsNumbersElement = document.querySelector('.ticket__chairs');
const hallNumberElement = document.querySelector('.ticket__hall');
const seanceTimeElement = document.querySelector('.ticket__start');

const makeFinalTicketDescription = () => {
    filmNameElement.textContent = filmName;
    seatsNumbersElement.textContent = seats;
    hallNumberElement.textContent = hallName.slice(-1);
    seanceTimeElement.textContent = seanceTime;
}

export { makeFinalTicketDescription };