import axios from "axios";
import { put } from "redux-saga/effects";

function* addLocation(action) {
    try {
        yield axios.post('/api/newLocation', { name:action.payload });
        yield put({ type: })
    }
}