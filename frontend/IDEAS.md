# Connecting Data From FastAPI

This is a basic example on how to put the data from FastAPI into
react

```typescript
import React, { useEffect, useState } from 'react';
import { StaticMap } from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';

const MapComponent = () => {
  const [dataPoints, setDataPoints] = useState<any[]>([]);

  useEffect(() => {
    // Fetch data from FastAPI
    fetch('http://localhost:8000/data_points')
      .then(response => response.json())
      .then(data => setDataPoints(data));
  }, []);

  // Deck.gl layer to visualize data points
  const scatterplotLayer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: dataPoints,
    getPosition: d => [d.lon, d.lat], // longitude, latitude
    getRadius: 100,
    getFillColor: [255, 0, 0],
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: -122.4194,
        latitude: 37.7749,
        zoom: 10,
        pitch: 0,
        bearing: 0
      }}
      controller={true}
      layers={[scatterplotLayer]}
    >
      <StaticMap mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} />
    </DeckGL>
  );
};

export default MapComponent;
```
