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
            evt.target.parentNode.classList.add('page-nav__day_chosen');
            return;
        }

        if (evt.target.matches('a')) {
            evt.target.classList.add('page-nav__day_chosen');
            return;
        }
    }
}

navigationElement.addEventListener('click', onNavigationPanelClick);

export { navigationElement };
