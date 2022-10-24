import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAllLocations() {
    try {
        const locations = yield axios.get('/api/locations/  ');
        console.log('get all:', locations.data);
        yield put({ type: 'SET_LOCATIONS', payload: locations.data});
    } catch {
        console.log('get locations error');
    }
}

function* locationsSaga() {
    yield takeLatest('FETCH_LOCATIONS', fetchAllLocations);
  }

export default locationsSaga;
