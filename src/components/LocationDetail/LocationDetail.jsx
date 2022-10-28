import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function LocationDetail() {
    const location = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);
    const { locationId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LOCATION_DETAILS', payload: locationId });
    }), [locationId];

    return (
        <div>
            <h3>{location.activity} {location.location}</h3>
        </div>
    )
}
export default LocationDetail;