import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchLocationDetails(action) {
    try {
        const location = yield axios.get(`api/locations/${action.payload}`);
        yield put({ type: 'SET_LOCATION_DETAILS', payload: location.data})

    }catch (e) {
        console.log(e);
    }
}

function* locationDetailSaga() {
    yield takeLatest('FETCH_LOCATION_DETAILS', fetchLocationDetails);
}



export default locationDetailSaga;