// функция принимает кол-во фильмов на день
// создаёт фрагмент, который содержит нужное кол-во карточек
// также есть функция отрисовки одной карточки через шаблон
// она отрисовывает разметку
// основная функция через цикл отрисовывает карточки, исходя из данных с сервера

//  также понадобится функция отрисовки разметки зала
// функция принимает номер зала и массив с временем сеансов (и кол-вом соответственно)
// а затем по кол-во залов на один фильм отрисовывается нужное кол-во залов
// внутри функции также по кол-ву сеансов на фильм отрисовывается время


const movieContainer = document.querySelector('main');

const createMovieCard = (movies, container) => {
    container.querySelectorAll('.movie').forEach((element) => element.remove());
    const fragment = document.createDocumentFragment();
    const templateElement = document.querySelector('.movie_description__template').content;
    
    movies.forEach((movie)=> {
        console.log(movie);
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('movie');
    const movieElement = templateElement.cloneNode(true);
    movieElement.querySelector('.movie__poster-image').src = movie.film_poster;
    movieElement.querySelector('.movie__title').textContent = movie.film_name;
    movieElement.querySelector('.movie__synopsis').textContent = movie.film_description;
    movieElement.querySelector('.movie__data-duration').textContent = `${movie.film_duration} минут`;
    movieElement.querySelector('.movie__data-origin').textContent = movie.origin;
    fragment.appendChild(movieElement);
    sectionElement.append(fragment);
    container.append(sectionElement);
  });

  return movies;
}

export {createMovieCard, movieContainer};
