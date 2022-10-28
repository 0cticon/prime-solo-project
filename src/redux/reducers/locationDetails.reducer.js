const locationDetailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_LOCATION_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default locationDetailReducer;