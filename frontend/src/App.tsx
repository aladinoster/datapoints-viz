import React, { useState } from 'react'
import DeckGL from '@deck.gl/react'
import { ScatterplotLayer } from '@deck.gl/layers'
import { Map } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

const initialData = [
    { position: [2.3522, 48.8566], size: 100 },
    { position: [2.3499, 48.8530], size: 100 },
    { position: [2.3333, 48.8600], size: 100 }
]

export default function App() {
    const [enabled, setEnabled] = useState(true)

    const layers = enabled ? [
        new ScatterplotLayer({
            id: 'scatterplot-layer',
            data: initialData,
            getPosition: (d: any) => d.position,
            getRadius: (d: any) => d.size,
            getFillColor: () => [255, 140, 0],
            radiusScale: 1,
            radiusMinPixels: 1,
            pickable: true
        })
    ] : []

    return (
        <div style={{ height: '100vh' }}>
            <button onClick={() => setEnabled(!enabled)} style={{ position: 'absolute', zIndex: 1, margin: 12 }}>{enabled ? 'Disable' : 'Enable'}</button>
            <DeckGL initialViewState={{ longitude: 2.3522, latitude: 48.8566, zoom: 12 }} controller={true} layers={layers}>
                {/* Map rendering handled by deck.gl via maplibre */}
            </DeckGL>
        </div>
    )
}
