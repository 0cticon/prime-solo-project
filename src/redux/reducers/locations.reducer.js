const locationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_LOCATIONS':
        return action.payload;
      case 'UNSET_LOCATION':
        return [];
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default locationsReducer;