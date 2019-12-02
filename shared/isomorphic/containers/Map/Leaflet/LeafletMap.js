import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Wrapper from './LeafletMap.styles';
const style = {
  width: '100%',
  height: '400px',
};
const config = {
  tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  maxZoom: 18,
  attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  defaultZoom: 11,
  center: [40.706877, -74.011265],
};
export default function LeafletMap({
  id = 'leaflet-map',
  center = [40.706877, -74.011265],
  zoom = 11,
  markerList = [],
  htmlMarkerList = [],
  customIconMarkerList = [],
}) {
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map(id, {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer(config.tileLayer, {
          attribution: config.attribution,
          maxZoom: config.maxZoom,
        }),
      ],
    });
    // return ()=>
  }, []);

  // add markers
  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      // markerRef.current.map(marker =>
      //   marker.setLatLng({ lat: marker.position[0], lng: marker.position[1] })
      // );
    } else {
      if (markerList.length !== 0) {
        markerRef.current = markerList.map(({ position, popupText }) =>
          L.marker(position)
            .addTo(mapRef.current)
            .bindPopup(popupText)
        );
      }
      if (htmlMarkerList.length !== 0) {
        markerRef.current = htmlMarkerList.map(
          ({ className, html, position, popupText }) =>
            L.marker(position, {
              icon: L.divIcon({
                className: className,
                popupAnchor: [15, -15], // point from which the popup should open relative to the iconAnchor
                html: html,
              }),
            })
              .addTo(mapRef.current)
              .bindPopup(popupText)
        );
      }
      if (customIconMarkerList.length !== 0) {
        markerRef.current = customIconMarkerList.map(
          ({ shadowUrl, iconUrl, position, popupText }) =>
            L.marker(position, {
              icon: L.icon({
                iconUrl: iconUrl,
                shadowUrl: shadowUrl,
                iconSize: [40, 40], // size of the icon
                shadowSize: [40, 40], // size of the shadow
                // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [12, 20], // the same for the shadow
                popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
              }),
            })
              .addTo(mapRef.current)
              .bindPopup(popupText)
        );
      }
    }
  }, [markerList, htmlMarkerList, customIconMarkerList]);
  return (
    <Wrapper className="isoLeafletMap">
      <div id={id} style={style} />
    </Wrapper>
  );
}
