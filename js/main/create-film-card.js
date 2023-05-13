import { filterHallsByFilm } from "./filter-halls-by-film.js";
import { gethallConfiguration } from "./get-hall-configuration.js";

const movieContainer = document.querySelector('main');

const makeMovieDescription = (movieElement, movie, fragment) => {
  movieElement.querySelector('.movie__poster-image').src = movie.film_poster;
  movieElement.querySelector('.movie__title').textContent = movie.film_name;
  movieElement.querySelector('.movie__synopsis').textContent = movie.film_description;
  movieElement.querySelector('.movie__data-duration').textContent = `${movie.film_duration} минут`;
  movieElement.querySelector('.movie__data-origin').textContent = movie.origin;
  fragment.appendChild(movieElement);
  return fragment;
}

const makeMovieSeance = (seance, weekday, halls, movie, hall) => {
  const fragment = document.createDocumentFragment();
  const listItem = document.createElement('li');
  const hallLink = document.createElement('a');
  listItem.classList.add('movie-seances__time-block');
  hallLink.classList.add('movie-seances__time');
  hallLink.href = './hall.html';
  hallLink.textContent = seance.seance_time;
  hallLink.dataset.hallId = seance.seance_hallid;
  hallLink.dataset.seanceId = seance.seance_id;
  const timestamp = (Number(weekday) / 1000) + (Number(seance.seance_start) * 60);
  const currentDay = new Date().getTime();
  const hallConfig = gethallConfiguration(halls, hallLink);

  if (timestamp < Math.floor(currentDay / 1000)) {
    hallLink.classList.add('disabled');
  }

  hallLink.dataset.timestamp = timestamp; 
  
  const onSeanceClick = (evt) => {
    evt.preventDefault();
    window.location.href = '../hall.html';
    const priceStandart = hall.hall_price_standart;
    const priceVip = hall.hall_price_vip;
    window.localStorage.setItem('priceStandart', `${priceStandart}`);
    window.localStorage.setItem('priceVip', `${priceVip}`);
    window.localStorage.setItem('timestamp', `${timestamp}`);
    window.localStorage.setItem('hallId', `${hallLink.dataset.hallId}`);
    window.localStorage.setItem('seanceId', `${hallLink.dataset.seanceId}`);
    window.localStorage.setItem('hallConfig', `${hallConfig}`);
    window.localStorage.setItem('filmName', `${movie.film_name}`);
    window.localStorage.setItem('seanceTime', `${seance.seance_time}`);
    window.localStorage.setItem('hallName', `${hall.hall_name}`);
  }

  hallLink.addEventListener('click', onSeanceClick);

  listItem.append(hallLink);
  fragment.append(listItem);
  return fragment;
}

const createMovieCard = (movies, container, seances, halls, weekday) => {
    container.querySelectorAll('.movie').forEach((element) => element.remove());
    const fragmentMovie = document.createDocumentFragment();
    const templateMovieElement = document.querySelector('.movie_description__template').content;
    const templateSeancesElement = document.querySelector('.movie_seances__template').content;

    movies.forEach((movie)=> {
      const sectionElement = document.createElement('section');
      sectionElement.classList.add('movie');

      const filmSeances = seances.filter((seance) => seance.seance_filmid === movie.film_id);
      const seancesArray = filmSeances.map((elem) => elem.seance_hallid);
      const filmHalls = filterHallsByFilm(seancesArray, halls);
      const movieElement = templateMovieElement.cloneNode(true);
      sectionElement.append(makeMovieDescription(movieElement, movie, fragmentMovie));
      
      filmHalls.forEach((hall) => {
        const hallElement = templateSeancesElement.cloneNode(true);
        hallElement.querySelector('.movie-seances__hall-title').textContent = hall.hall_name;
        const seancesListElement = hallElement.querySelector('.movie-seances__list');

        for(let i = 0; i < filmSeances.length; i++) {
            if(hall.hall_id === filmSeances[i].seance_hallid) {
              seancesListElement.append(makeMovieSeance(filmSeances[i], weekday, halls, movie, hall));
            }
        }  
        sectionElement.append(hallElement);
      });
      container.append(sectionElement);
  });
}

export { createMovieCard, movieContainer };
