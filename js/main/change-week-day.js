import { createMovieCard, movieContainer } from "./create-film-card.js";
import { films, seances, halls } from "./main.js";

const navigationElement = document.querySelector('.page-nav');
const daysElements = navigationElement.querySelectorAll('a');

const onNavigationPanelClick = (evt) => {
    
    if (evt.target.closest('a')) {   

        daysElements.forEach((element) => {
            if (element.classList.contains('page-nav__day_chosen')) {
                element.classList.remove('page-nav__day_chosen');
            }
        })

        if (evt.target.parentNode.matches('a')) {
            const weekday = evt.target.parentNode.dataset.timestamp; 
            evt.target.parentNode.classList.add('page-nav__day_chosen');
            createMovieCard(films, movieContainer, seances, halls, weekday);
            return;
        }

        if (evt.target.matches('a')) {
            const weekday = evt.target.dataset.timestamp;
            evt.target.classList.add('page-nav__day_chosen');
            createMovieCard(films, movieContainer, seances, halls, weekday);
            return;
        }
    }
}

navigationElement.addEventListener('click', onNavigationPanelClick);

export { navigationElement, daysElements };
