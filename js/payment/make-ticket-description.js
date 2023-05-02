const filmNameElement = document.querySelector('.ticket__title');
const seatsNumbersElement = document.querySelector('.ticket__chairs');
const hallNumberElement = document.querySelector('.ticket__hall');
const seanceTimeElement = document.querySelector('.ticket__start');
const fullPriceElement = document.querySelector('.ticket__cost');

const {fullPrice, seats, filmName, seanceTime, hallName} = window.localStorage;

const makeTicketDescription = () => {
    filmNameElement.textContent = filmName;
    seatsNumbersElement.textContent = seats;
    hallNumberElement.textContent = hallName;
    seanceTimeElement.textContent = seanceTime;
    fullPriceElement.textContent = fullPrice;
}

export { makeTicketDescription };
