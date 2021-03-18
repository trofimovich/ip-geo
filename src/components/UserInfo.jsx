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

  const location = useSelector(({ userLocation }) => userLocation.location);
  const isFetching = useSelector(({ userLocation }) => userLocation.isFetching);
  return (
    <div className="row h-100">
      <div className="col-md-6 col-lg-9 h-100">
        <Map lat={location?.latitude} lng={location?.longitude} />
      </div>
      <div className="col-md-6 col-lg-3">
        <Card
          title={location?.ip}
          content={`${location?.country_name} - ${location?.city}`}
          isLoading={isFetching}
        />
      </div>
    </div>
  );
};

export default UserInfo;
