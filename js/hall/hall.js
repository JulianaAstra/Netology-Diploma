import { createHall, onReserveButtonClick, onSeatClick, reserveButton, hallContainerElement } from "./create-hall.js";

const {hallName, hallConfig, timestamp, hallId, seanceId, filmName, seanceTime, priceVip, priceStandart} = window.localStorage;

const getHallFromServer = () => 
    fetch('https://jscp-diplom.netoserver.ru', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `event=get_hallConfig&timestamp=${timestamp}&hallId=${hallId}&seanceId=${seanceId}`
    })
        .then((response) => {
            if(response.ok) {
                return response;
            }
            throw new Error(`${response.status} : ${response.text}`);
        })
        .then((response) => response.json())
        .then((data) => createHall(data, hallConfig, filmName, seanceTime, hallName, priceVip, priceStandart))
        .catch((error) => {
            console.log(error);
        });

getHallFromServer();
hallContainerElement.addEventListener('click', onSeatClick);
reserveButton.addEventListener('click', onReserveButtonClick);
