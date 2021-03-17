import React from 'react';
import { useSelector } from 'react-redux';

import Card from './shared/Card';
import Map from './shared/Map';

const SearchInfo = () => {
  const activeLocation = useSelector((state) => state.activeLocation);
  return (
    <div className="row h-100">
      <div className="col-sm-6 col-md-9 h-100">
        <Map lat={activeLocation?.latitude} lon={activeLocation?.longitude} />
      </div>
      <div className="col-sm-6 col-md-3">
        {activeLocation && (
          <Card
            title={activeLocation.searchString}
            content={`${activeLocation.country_name} - ${activeLocation.city}`}
          />
        )}
      </div>
    </div>
  );
};

export default SearchInfo;
