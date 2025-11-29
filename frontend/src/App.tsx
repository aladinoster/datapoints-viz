import React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function App() {
  return (
    <Map
      initialViewState={{
        longitude: 2.3522,
        latitude: 48.8566,
        zoom: 11,
      }}
      style={{width: '100vw', height: '100vh'}}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
    />
  );
}
