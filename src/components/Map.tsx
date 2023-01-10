import { useLayoutEffect, useRef, useEffect } from "react";

import { useSelector } from "react-redux";

import { map, tileLayer, LatLng, Polyline, Marker, divIcon } from "leaflet";
import type { Map } from "leaflet";
import { errorSelector, loadingSelector, routeSelector } from "../store/selectors/routeSelector";

import { Spin } from "antd";
import { Alert } from "antd";

const BASE_MAP = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const LeafletMap = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<Map | null>(null);

  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const route = useSelector(routeSelector);

  useLayoutEffect(() => {
    if (ref.current && !mapRef.current) {
      const newMap = map("leaflet-map", { attributionControl: false });
      newMap.setView([59.9311, 30.3609]);
      newMap.setZoom(10);

      tileLayer(BASE_MAP, {}).addTo(newMap);
      mapRef.current = newMap;
    }
  }, [ref]);

  useEffect(() => {
    if (route && mapRef?.current) {
      mapRef.current.eachLayer((layer: { _latlngs?: any; _latlng?: any; remove: Function }) => {
        (layer._latlngs || layer._latlng) && layer.remove();
      });
      if (route.length > 0) {
        const pointList = [];
        for (let point of route) {
          pointList.push(new LatLng(point[1], point[0]));
        }
        const polyline = new Polyline(pointList, {
          color: "blue",
          weight: 3,
          opacity: 0.5,
        });

        if (route?.[0]) {
          const marker = new Marker([route?.[0]?.[1], route?.[0]?.[0]]);
          marker.addTo(mapRef.current);
          const marker2 = new Marker([
            route?.[route.length - 1]?.[1],
            route?.[route.length - 1]?.[0],
          ]);
          marker2.addTo(mapRef.current);
        }
        polyline.addTo(mapRef.current);

        mapRef.current.fitBounds(polyline.getBounds());
      }
    }
  }, [route]);

  return (
    <div id="leaflet-map" className="leaflet-map" ref={ref}>
      {loading && <Spin size="large" className="loading-icon" />}
      {error && <Alert type="error" message={error} className="error-text" />}
    </div>
  );
};

export default LeafletMap;
