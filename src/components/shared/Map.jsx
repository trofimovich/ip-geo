import React from 'react';
import GoogleMapReact from 'google-map-react';

import MapMarker from './MapMarker';

const Map = ({ lat = 59.95, lng = 30.35 }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: 59.95, lng: 30.35 }}
        center={{ lat, lng }}
        defaultZoom={8}
      >
        <MapMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
