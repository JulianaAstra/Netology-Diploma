import { createMovieCard, movieContainer } from "./create-film-card.js";

// Films, halls data
const getDataFromServer = () =>
    fetch('http://f0769682.xsph.ru/', {
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
        .then((response) => {
            const data = response.json();
            return data;
        })
        .catch((error) => {
            console.log(error);
        });

const dataFromServer = await getDataFromServer();
const films = dataFromServer.films.result;
const seances = dataFromServer.seances.result;
const halls = dataFromServer.halls.result;

createMovieCard(films, movieContainer, seances, halls);

// Sales with date
// const getSeansesDataFromServer = () => {

    fetch('http://f0769682.xsph.ru/', {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded',
        },
        body: 'event=sale_add&timestamp=${value1}&hallId=${value2}&seanceId=${value3}&hallConfiguration=${value4}'
    })
        .then((response) => {
            if(response.ok) {
                console.log('hello');
                return response;
            }
            throw new Error(`${response.status} : ${response.text}`);
        })
        .then((response) => {
            const data = response.json();
            return data;
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
    });
// }

// const dataSeansesFromServer = await getSeansesDataFromServer();
// console.log(dataSeansesFromServer);

export { dataFromServer }