import React from 'react';

import Card from './shared/Card';
import Map from './shared/Map';

const UserInfo = () => {
  return (
    <div className="row">
      <div className="col-9">
        <Map lat="59" lng="33" />
      </div>
      <div className="col-3">
        <Card
          title="Title"
          content="USA - New York"
        />
      </div>
    </div>
  );
};

export default UserInfo;
