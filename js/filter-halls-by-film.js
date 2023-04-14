const filterHallsByFilm = (seances, halls) => {
    let resultArray = [];
    halls.forEach((hall) => {
        for(let i = 0; i < seances.length; i++) {
            if (hall.hall_id === seances[i] && resultArray.indexOf(hall) === -1) {
                resultArray.push(hall);
            }
        }
    })
    return resultArray;
}

export { filterHallsByFilm };
