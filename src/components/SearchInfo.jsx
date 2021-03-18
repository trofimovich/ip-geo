import React from 'react';
import { useSelector } from 'react-redux';

import Card from './shared/Card';
import Map from './shared/Map';

const SearchInfo = () => {
  const activeLocation = useSelector(({ location }) => location.location);
  const isFetching = useSelector(({ location }) => location.isFetching);
  return (
    <div className="row h-100">
      <div className="col-md-6 col-lg-9 h-100">
        <Map lat={activeLocation?.latitude} lng={activeLocation?.longitude} />
      </div>
      <div className="col-md-6 col-lg-3">
        {activeLocation && (
          <Card
            title={activeLocation.searchString}
            content={`${activeLocation.country_name} - ${activeLocation.city}`}
            isLoading={isFetching}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInfo;
