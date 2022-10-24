import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LocationItem({
    location
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const displayLocation = (locationToDisplay) => {
        console.log(locationToDisplay);
    }
    return (
        <div>{location.activity} {location.id}</div>
    )


}

export default LocationItem;