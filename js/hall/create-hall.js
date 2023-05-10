const hallContainerElement = document.querySelector('.conf-step__wrapper');
const hallCardFilmNameElement = document.querySelector('.buying__info-title');
const hallCardFilmTimeElement = document.querySelector('.buying__info-start');
const hallCardHallNameElement = document.querySelector('.buying__info-hall');
const reserveButton = document.querySelector('.acception-button');

const getHallNumber = (hallName) => {
    let hallNum = null;   
    if (hallName.length < 5) {
        hallNum = hallName.slice(-1);
        return hallNum;
    } 
    hallNum = hallName.slice(-2);
    return hallNum;
}

const makeFilmDescription = (filmName, seanceTime, hallName) => {
    const hallNum = getHallNumber(hallName);

    hallCardFilmNameElement.textContent = filmName;
    hallCardFilmTimeElement.textContent = `Начало сеанса: ${seanceTime}`;
    hallCardHallNameElement.textContent = `Зал ${hallNum}`;
};

const makeLegendDescription = (priceVip, priceStandart) => {
    const priceVipElement = document.querySelector('.price-vip');
    const priceStandardElement = document.querySelector('.price-standart');
    priceStandardElement.textContent = priceStandart;
    priceVipElement.textContent = priceVip;
}

const setChairPrice = (priceVip, priceStandart) => {
    const chairs = hallContainerElement.querySelectorAll('.conf-step__chair');
    chairs.forEach((chair) => {
        if (chair.classList.contains('conf-step__chair_standart')) {
            chair.dataset.price = priceStandart;
            return;
        } 
        if (chair.classList.contains('conf-step__chair_vip')) {
            chair.dataset.price = priceVip;
            return;
        }
    })
}

const setSeatsNumeration = () => {
    const rows = document.querySelectorAll('.conf-step__row');
    rows.forEach((row, idx) => {
        row.dataset.rowNum = idx + 1;
        const chairs = row.querySelectorAll('.conf-step__chair');
        chairs.forEach((chair, idx) => {
            if(!chair.classList.contains('conf-step__chair_disabled')) {
                chair.dataset.chairNum = idx + 1;
            }
        });
    });
}

const createHall = (data, hallConfig, filmName, seanceTime, hallName, priceVip, priceStandart) => {
    if (!data) {
        hallContainerElement.innerHTML = hallConfig;
        makeFilmDescription(filmName, seanceTime, hallName);
        setSeatsNumeration();
        setChairPrice(priceVip, priceStandart);
        makeLegendDescription(priceVip, priceStandart);
        return;
    }
    hallContainerElement.innerHTML = data;
    setSeatsNumeration();
    setChairPrice(priceVip, priceStandart);
    makeFilmDescription(filmName, seanceTime, hallName);
    makeLegendDescription(priceVip, priceStandart);
}

const onSeatClick = (evt) => {
    if (evt.target.classList.contains('conf-step__chair_standart') || evt.target.classList.contains('conf-step__chair_vip')) {
        evt.target.classList.toggle('conf-step__chair_selected');
    }    
}

const getFullPrice = (prices) => prices.reduce((acc, item) => acc + item, 0);

const onReserveButtonClick = () => {
    const seats = document.querySelectorAll('.conf-step__chair');
    const seatsInfo = [];
    let seatsPrices = [];
    seats.forEach((seat) => {
        if (seat.classList.contains('conf-step__chair_selected') && seat.parentNode.parentNode.matches('.conf-step__wrapper')) {
            const seatInfo = `${seat.parentNode.dataset.rowNum}/${seat.dataset.chairNum}`;
            const price = seat.dataset.price;
            seatsPrices.push(Number(price));
            seatsInfo.push(seatInfo);
            seat.classList.remove('conf-step__chair_selected');
            seat.classList.add('conf-step__chair_taken');
        } 
    })
    const hall = hallContainerElement.innerHTML;
    window.localStorage.setItem('reserveHall', hall);
    window.localStorage.setItem('seats', seatsInfo.join());
    window.localStorage.setItem('fullPrice', `${getFullPrice(seatsPrices)}`);
    window.location.href = '/payment.html';
}

export { createHall, onReserveButtonClick, onSeatClick, reserveButton, hallContainerElement };