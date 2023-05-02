const gethallConfiguration = (halls, link) => {
    const currentHall = halls.filter((hall) => link.dataset.hallId === hall.hall_id);
    
    return currentHall[0].hall_config;
}

export { gethallConfiguration };
