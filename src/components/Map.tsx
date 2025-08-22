import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  className?: string;
}

const Map: React.FC<MapProps> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Coordinates for Arta, Epirus, Greece
      const artaLat = 39.1606;
      const artaLng = 20.9853;

      // Initialize the map with responsive options
      mapInstance.current = L.map(mapRef.current, {
        center: [artaLat, artaLng],
        zoom: 15,
        zoomControl: true,
        attributionControl: true,
        dragging: true,
        touchZoom: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true,
        tap: true,
        bounceAtZoomLimits: false
      });

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 10
      }).addTo(mapInstance.current);

      // Create a custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-store-marker',
        html: `
          <div style="
            background: linear-gradient(135deg, #D4AF37, #FFD700);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 4px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 15px rgba(212, 175, 55, 0.5);
            position: relative;
          ">
            <span style="
              color: #000;
              font-weight: bold;
              font-size: 20px;
            ">💎</span>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
      });

      // Add a marker for the store location
      const storeMarker = L.marker([artaLat, artaLng], { icon: customIcon })
        .addTo(mapInstance.current)
        .bindPopup(`
          <div style="text-align: center; padding: 10px;">
            <h3 style="color: #D4AF37; margin: 0 0 10px 0; font-weight: bold;">Stratis Fine Jewels</h3>
            <p style="margin: 5px 0; color: #333;">Αρτα, Ηπειρος</p>
            <p style="margin: 5px 0; color: #666;">Ελλάδα</p>
          </div>
        `, {
          closeButton: true,
          className: 'custom-popup'
        })
        .openPopup();

      // Add a circle around the store location
      L.circle([artaLat, artaLng], {
        color: '#D4AF37',
        fillColor: '#D4AF37',
        fillOpacity: 0.15,
        radius: 300,
        weight: 2
      }).addTo(mapInstance.current);

      // Responsive map refresh
      const refreshMap = () => {
        if (mapInstance.current) {
          mapInstance.current.invalidateSize();
        }
      };

      // Initial refresh
      setTimeout(refreshMap, 100);
      setTimeout(refreshMap, 500);

      // Add resize listener for responsive behavior
      window.addEventListener('resize', refreshMap);
      window.addEventListener('orientationchange', refreshMap);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', refreshMap);
        window.removeEventListener('orientationchange', refreshMap);
        if (mapInstance.current) {
          mapInstance.current.remove();
          mapInstance.current = null;
        }
      };
    }
  }, []);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-full rounded-lg ${className}`}
      style={{ 
        width: '100%',
        height: '100%'
      }}
    />
  );
};

export default Map;
