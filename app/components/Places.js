'use client';

import dynamic from 'next/dynamic';
import { Component, useState } from 'react';
import { places } from '../data';

const TravelMap = dynamic(() => import('./TravelMap'), {
  ssr: false,
  loading: () => <div className="map-placeholder" role="status">Loading map…</div>,
});

class MapBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? <div className="map-placeholder" role="status">The map is unavailable. Destinations are listed below.</div> : this.props.children;
  }
}

export default function Places() {
  const [selection, setSelection] = useState(null);
  return <>
    <MapBoundary><TravelMap selection={selection} /></MapBoundary>
    <ul className="place-list">{places.map(place => <li key={place.id}><button type="button" onClick={() => setSelection({ id: place.id })} aria-label={`Show ${place.name} on map`}>{place.name}</button><span>{place.caption}</span>{!place.photo && <span className="todo">[TODO] Add Hong Kong exchange photo.</span>}</li>)}</ul>
  </>;
}
