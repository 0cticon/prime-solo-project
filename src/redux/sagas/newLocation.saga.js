import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";


// CREATE

function* addActivity(action) {
    try {
        yield axios.post('/api/locations', action.payload);
        yield put({ type: 'FETCH_LOCATION_LIST' });
    }catch (error) {
        console.log('add location saga failed', error);
        alert('something went wrong.');
    }
}

// function* addLocation(action) {
//     try {
//         yield axios.post('/api/locations', { name: action.payload });
//         yield put({ type: 'FETCH_LOCATION_LIST' });
//     }catch (error) {
//         console.log('add location saga failed', error);
//         alert('something went wrong.');
//     }
// }

function* newLocationSaga() {
    yield takeLatest('ADD_ACTIVITY', addActivity);
    // yield takeLatest('ADD_LOCATION', addLocation);
}

export default newLocationSaga;