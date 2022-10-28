import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

function LocationDetails() {
    const location = useSelector(store => store.locationDetails);
    const { locationId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LOCATION_DETAILS', payload: locationId });
    }, [locationId]);

    return (
        <div>
            <h3>{location.activity} {location.location}</h3>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.location}`}>Open Map</a>
        </div>
    )
}
export default LocationDetails;