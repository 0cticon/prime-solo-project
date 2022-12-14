import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../LocationItem/LocationItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const activityList = useSelector((store) => store.locations);
  const locationList = useSelector((store) => store.locations);
  const pictureList = useSelector((store) => store.locations);
  const [newActivity, setNewActivity] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newImage, setNewImage] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, []);

  const addNewLocation = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ACTIVITY', payload: { activity: newActivity, location: newLocation, image: newImage } });

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
          <input value={newActivity} placeholder={`New Activity / Location`} onChange={(e) => setNewActivity(e.target.value)} type="text" />
          <input value={newLocation} placeholder={`Address / GPS`} onChange={(e) => setNewLocation(e.target.value)} type="text" />
          <input value={newImage} placeholder={`Image`} onChange={(e) => setNewImage(e.target.value)} type="text" />
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
