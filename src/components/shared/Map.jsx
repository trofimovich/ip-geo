import React from 'react';
import GoogleMapReact from 'google-map-react';
import { number } from 'prop-types';

import MapMarker from './MapMarker';

const Map = ({ lat, lng }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_API_KEY }}
        defaultCenter={{ lat: Map.defaultProps.lat, lng: Map.defaultProps.lng }}
        center={{ lat, lng }}
        defaultZoom={10}
      >
        <MapMarker lat={lat} lng={lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

Map.defaultProps = {
  lat: 59.95,
  lng: 30.35,
};

Map.propTypes = {
  lat: number,
  lng: number,
};
