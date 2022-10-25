import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../LocationItem/LocationItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const locationList = useSelector(store => store.locations);
  const [newLocation, setNewLocation] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, []);

  const addNewLocation = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_LOCATION', payload: newLocation });
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <h3>locations go here</h3> */}
      <section className="locations">
        {locationList.map(location => {
          return (
            <LocationItem key={location.id} location={location} />
          )
        })}
      </section>
      <div>
        <form onSubmit={addNewLocation}>
          <input value={''} placeholder={`New Activity / Location`} onChange={(e) => addNewLocation(e.target.value)} type="text" />
          {/* <input value={''} placeholder={`Address / GPS`} onChange={(e) => } */}
          <input type="submit" />
        </form>
      </div>
      {/* use effect / axios get for info in datadase */}
      {/* button to add new location  / POST */}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
