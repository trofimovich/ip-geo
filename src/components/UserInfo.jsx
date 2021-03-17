import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from './shared/Card';
import Map from './shared/Map';

import { findUserLocation } from '../actions/location';

const UserInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUserLocation());
  }, []);

  const userLocation = useSelector((state) => state.userLocation);
  return (
    <div className="row h-100">
      <div className="col-sm-6 col-md-9 h-100">
        <Map lat={userLocation?.latitude} lon={userLocation?.longitude} />
      </div>
      <div className="col-sm-6 col-md-3">
        <Card
          title={userLocation?.ip}
          content={`${userLocation?.country_name} - ${userLocation?.city}`}
        />
      </div>
    </div>
  );
};

export default UserInfo;
