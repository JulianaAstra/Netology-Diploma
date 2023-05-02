import { makeFinalTicketDescription } from "./make-final-ticket-description.js";

const {seats, filmName, seanceTime, hallName, ticketId} = window.localStorage;

makeFinalTicketDescription();

export { seats, filmName, seanceTime, hallName};

