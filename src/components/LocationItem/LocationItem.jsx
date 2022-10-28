import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

function LocationItem({
    location
}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const displayLocation = (locationToDisplay) => {
        console.log(locationToDisplay);
        history.push(`/detail/${locationToDisplay.id}`);
    }
    return (
        <div onClick={(event) => displayLocation(location)}>{location.activity}</div>
    )


}

export default LocationItem;