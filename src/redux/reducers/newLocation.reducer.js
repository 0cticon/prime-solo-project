const newLocation = (state = [], action) => {
    if (action.type === 'SET_NEW_LOCATION') {
        return action.payload;
    }
    return state;
}

export default newLocation;