import { createMovieCard, movieContainer } from "./create-film-card.js";
import { navigationElement } from "./change-week-day.js";
import { getCurrentDate } from "./get-current-date.js";

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
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
        });


const dataFromServer = await getDataFromServer();
const films = dataFromServer.films.result;
console.log(films);
const seances = dataFromServer.seances.result;
console.log(seances);
const halls = dataFromServer.halls.result;
console.log(halls);

// createMovieCard(films, movieContainer, seances, halls);
//getCurrentDate();

// Sales with date

// const getHallsFromServer = () => 
//     fetch('http://f0769682.xsph.ru/', {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/x-www-form-urlencoded'
//         },
//         body: 'event=get_hallConfig&timestamp=${value1}&hallId=${value2}&seanceId=${value3}'
//     })
//         .then((response) => {
//             if(response.ok) {
//                 return response;
//             }
//             throw new Error(`${response.status} : ${response.text}`);
//         })
//         .then((response) => response.json())
//         .catch((error) => {
//             console.log(error);
//         });

// const dataSeansesFromServer = await getHallsFromServer();
// console.log(dataSeansesFromServer);

// let xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://f0769682.xsph.ru/');
// xhr.responseType = 'json';
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onload = function() {
//     let responseObj = xhr.response;
//     console.log(responseObj); 
//   };
// xhr.send('event=get_hallConfig&timestamp=${value1}&hallId=${value2}&seanceId=${value3}');



export { dataFromServer, films, seances, halls };