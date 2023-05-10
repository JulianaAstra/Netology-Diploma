import { makeTicketDescription } from "./make-ticket-description.js";

const {timestamp, hallId, seanceId, reserveHall} = window.localStorage;
const reserveButton = document.querySelector('.acception-button');

const sendReserveToServer = () => 
    fetch('https://jscp-diplom.tw1.ru/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `event=sale_add&timestamp=${timestamp}&hallId=${hallId}&seanceId=${seanceId}&hallConfiguration=${reserveHall}`
    })
        .then((response) => {
            if(response.ok) {
                return response;
            }
            throw new Error(`${response.status} : ${response.text}`);
        })
        .then((response) => console.log(response.json()))
        .catch((error) => {
            console.log(error);
        });

const onReserveButtonClick = (evt) => {
    evt.preventDefault();
    window.localStorage.setItem('ticketId', Date.now());
    sendReserveToServer();
    window.location.href = '/ticket.html';
}

makeTicketDescription();
reserveButton.addEventListener('click', onReserveButtonClick);
