import { createMovieCard, movieContainer } from './create-film-card.js';
import { getCurrentDate } from './get-current-date.js';

const getDataFromServer = () => 
    fetch('https://jscp-diplom.tw1.ru/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: 'event=update'
    })
        .then((response) => {
            if(response.ok) {
                return response;
            }
            throw new Error(`${response.status} : ${response.text}`);
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });

        
const dataFromServer = await getDataFromServer();
const films = dataFromServer.films.result;
const seances = dataFromServer.seances.result;
const halls = dataFromServer.halls.result;
const chosenDayElement = document.querySelector('.page-nav__day_chosen');
const chosenDayTimestamp = chosenDayElement.dataset.timestamp;

createMovieCard(films, movieContainer, seances, halls, chosenDayTimestamp);

getCurrentDate();

export { films, seances, halls };