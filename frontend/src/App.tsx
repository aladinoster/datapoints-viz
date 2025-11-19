import React, { useState, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { ArcLayer } from '@deck.gl/layers';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Define the type for a single point
interface Point {
  lon: number;
  lat: number;
}

// Define the type for arc data
interface ArcData {
  sourcePosition: [number, number];
  targetPosition: [number, number];
}

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export default function App() {
  const [arcData, setArcData] = useState<ArcData[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/random-arc-in-paris')
      .then(response => response.json())
      .then((points: Point[]) => {
        const arcs = [];
        for (let i = 0; i < points.length - 1; i++) {
          arcs.push({
            sourcePosition: [points[i].lon, points[i].lat],
            targetPosition: [points[i + 1].lon, points[i + 1].lat],
          });
        }
        setArcData(arcs);
      });
  }, []);

  const layers = [
    new ArcLayer<ArcData>({
      id: 'arc-layer',
      data: arcData,
      getSourcePosition: d => d.sourcePosition,
      getTargetPosition: d => d.targetPosition,
      getSourceColor: () => [0, 255, 0],
      getTargetColor: () => [0, 255, 0],
      getWidth: 2,
    }),
  ];

  return (
    <DeckGL
      initialViewState={{
        longitude: 2.3522,
        latitude: 48.8566,
        zoom: 11,
        pitch: 45,
      }}
      controller={true}
      layers={layers}
    >
      <Map
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v11"
      />
    </DeckGL>
  );
}
