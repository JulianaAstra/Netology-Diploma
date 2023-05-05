import { makeFinalTicketDescription } from "./make-final-ticket-description.js";
import { getQrCode } from "./qr.js";
import dayjs from 'dayjs';

const {seats, filmName, seanceTime, timestamp, hallName, ticketId} = window.localStorage;

const date = dayjs.unix(timestamp).format('DD/MM/YYYY');

makeFinalTicketDescription();
getQrCode(filmName, hallName, seats, date, seanceTime);
window.localStorage.clear()

export { seats, filmName, seanceTime, hallName};

