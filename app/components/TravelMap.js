'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon, latLngBounds } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { LocateFixed } from 'lucide-react';
import { places } from '../data';

const markerIcon = new Icon({
  iconUrl: '/map/marker-icon.png', iconRetinaUrl: '/map/marker-icon-2x.png',
  shadowUrl: '/map/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41],
  popupAnchor: [1, -34], shadowSize: [41, 41],
});
const bounds = latLngBounds(places.map(place => place.coordinates));

function ResetView() {
  const map = useMap();
  return <button className="map-reset" type="button" title="Show all destinations" aria-label="Show all destinations" onClick={() => map.fitBounds(bounds, { padding: [40, 40] })}><LocateFixed size={20} /></button>;
}

function SelectedDestination({ selection, markers }) {
  const map = useMap();
  useEffect(() => {
    if (!selection) return;
    const place = places.find(place => place.id === selection.id);
    if (!place) return;
    map.setView(place.coordinates, 7, { animate: false });
    markers.current[place.id]?.openPopup();
  }, [map, selection, markers]);
  return null;
}

export default function TravelMap({ selection }) {
  const [tileError, setTileError] = useState(false);
  const markers = useRef({});
  return <div className="map-wrap">
    <MapContainer bounds={bounds} boundsOptions={{ padding: [40, 40] }} scrollWheelZoom={false} zoomAnimation={false} fadeAnimation={false} className="travel-map" aria-label="Travel destinations map">
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" eventHandlers={{ tileerror: () => setTileError(true) }} />
      {places.map(place => <Marker key={place.id} ref={marker => { markers.current[place.id] = marker; }} position={place.coordinates} icon={markerIcon} title={place.name} alt={`Open ${place.name}`}>
        <Popup minWidth={200} maxWidth={260} autoPanPaddingTopLeft={[24, 60]} autoPanPaddingBottomRight={[24, 24]} keepInView>
          <div className="map-popup"><h3>{place.name}</h3>{place.photo ? <img src={place.photo} alt={place.alt} /> : <div className="missing-photo">[TODO] Add Hong Kong exchange photo.</div>}<p>{place.caption}</p></div>
        </Popup>
      </Marker>)}
      <ResetView />
      <SelectedDestination selection={selection} markers={markers} />
    </MapContainer>
    {tileError && <p className="map-notice" role="status">Map tiles are unavailable. Destination pins and photos are still available.</p>}
  </div>;
}
