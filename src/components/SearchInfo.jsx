import React from 'react';

import Card from './shared/Card';
import Map from './shared/Map';

const SearchInfo = () => {
  return (
    <div className="row h-100">
      <div className="col-sm-6 col-md-9 h-100">
        <Map />
      </div>
      <div className="col-sm-6 col-md-3">
        <Card
          title="Title"
          content="USA - New York"
        />
      </div>
    </div>
  );
};

export default SearchInfo;
