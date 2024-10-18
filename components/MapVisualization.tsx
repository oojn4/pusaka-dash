import mapboxgl, { Map as MapboxMap, Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmF1emFuZmFsZHkiLCJhIjoiY20yYmF0MG94MG1oYjJrcXhkMWo4dGh4eCJ9.X0AVMmOyRm1Q8ObMiqL7VA'; // Replace with your Mapbox token

interface MapVisualizationProps {
  geojsonData: GeoJSON.FeatureCollection | undefined; // Allow geojsonData to be nullable
}

const MapVisualization: React.FC<MapVisualizationProps> = ({ geojsonData }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapboxMap | null>(null);
  const popupRef = useRef(new Popup({ closeButton: false, closeOnClick: false }));

  const [hoveredFeature, setHoveredFeature] = useState<GeoJSON.Feature | null>(null);

  useEffect(() => {
    if (mapContainer.current && geojsonData) {
      if (!map.current) {
        // Initialize Mapbox map
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [110.4262, -7.025], // Center on Central Java
          zoom: 8,
        });
      }

      map.current.on('load', () => {
        if (!map.current?.getSource('geojson-data')) {
          map.current?.addSource('geojson-data', {
            type: 'geojson',
            data: geojsonData,
          });

          // Add fill layer to render polygons
          map.current?.addLayer({
            id: 'polygons-fill',
            type: 'fill',
            source: 'geojson-data',
            layout: {},
            paint: {
              'fill-color': [
                'case',
                ['==', ['get', 'Merged_Dataset_of_Jateng_and_PredictData_IKP_2023_Random_Forest'], null], 
                'rgba(0, 0, 0, 0)', // Transparan jika N/A
                [
                  'interpolate',
                  ['linear'],
                  ['get', 'Merged_Dataset_of_Jateng_and_PredictData_IKP_2023_Random_Forest'],
                  45.033, '#67000d', // Dark red
                  52.593, '#a50f15', // Slightly lighter red
                  55.927, '#cb181d', // Reddish-brown
                  59.012, '#ef3b2c', // Medium red
                  62.141, '#fb6a4a', // Light peach
                  65.704, '#fee5d9', // Very light peach
                  83.255, '#fcbba1'  // Lightest color at the top end
                ]
              ],
              'fill-opacity': 0.6 // Adjust fill opacity if necessary
            }
            ,
          });

          // Add a line layer for borders around polygons
          map.current?.addLayer({
            id: 'polygons-border',
            type: 'line',
            source: 'geojson-data',
            layout: {},
            paint: {
              'line-color': '#000',
              'line-width': 1,
            },
          });
        }

        // Add mousemove and mouseleave events for tooltips
        map.current?.on('mousemove', 'polygons-fill', (e) => {
          if (e.features && e.features.length > 0) {
            const feature = e.features[0];

            // Safely access properties by checking if they exist
            const properties = feature.properties;
            if (properties) {
              setHoveredFeature(feature);

              const coordinates = e.lngLat;

              popupRef.current
                .setLngLat(coordinates)
                .setHTML(`
                  <div style="background-color: white; color: black;">
                    <strong>Estimasi IKP 2023:</strong> ${properties.Merged_Dataset_of_Jateng_and_PredictData_IKP_2023_Random_Forest || 'N/A'}<br/>
                    <strong>Kelurahan/Desa:</strong> ${properties.ADM4_EN || 'N/A'}<br/>
                  </div>
                `);
              if (map.current) {
                popupRef.current.addTo(map.current); // Ensures map.current is not null before using it
              }
            }
          }
        });

        map.current?.on('mouseleave', 'polygons-fill', () => {
          popupRef.current.remove(); // Remove tooltip on mouse leave
          setHoveredFeature(null);
        });
      });
    }

    // Update the map data and auto-focus the map on new data when geojsonData changes
    if (map.current && geojsonData) {
      const source = map.current.getSource('geojson-data') as mapboxgl.GeoJSONSource;
      if (source) {
        source.setData(geojsonData);
      }

      // Fit the map bounds to the filtered geojsonData
      const bounds = new mapboxgl.LngLatBounds();
      geojsonData.features.forEach((feature) => {
        const coordinates = feature.geometry.type === 'Polygon'
          ? feature.geometry.coordinates[0]
          : feature.geometry.type === 'MultiPolygon'
          ? feature.geometry.coordinates.flat(2)
          : [];

        coordinates.forEach(([lng, lat]) => bounds.extend([lng, lat]));
      });

      if (!bounds.isEmpty()) {
        map.current.fitBounds(bounds, { padding: 20 });
      }
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [geojsonData]);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default MapVisualization;
