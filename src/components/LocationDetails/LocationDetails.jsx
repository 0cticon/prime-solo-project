import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './LocationDetails.css';

function LocationDetails() {
    const location = useSelector(store => store.locationDetails);
    const { locationId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LOCATION_DETAILS', payload: locationId });
    }, [locationId]);

    return (
        <div className="location">
            <h1>{location.activity}</h1> <h4>located at</h4> <h3>{location.location}</h3>
            <a href={`https://www.google.com/maps/dir/?api=1&destination=${location.location}`}>Navigate to Location</a>
        </div>
    )
}
export default LocationDetails;