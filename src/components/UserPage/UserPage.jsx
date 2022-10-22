import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import LocationItem from '../LocationItem/LocationItem';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const locationList = useSelector(store => store.location);

  useEffect(() => {
    dispatch({ type: 'FETCH_LOCATIONS' });
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <div>
        locations go here
      </div>
      {/* use effect / axios get for info in datadase */}
      {/* button to add new location  / POST */}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
