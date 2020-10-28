import React, { useEffect, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { getData } from '../../api';
import { INITIAL_VIEWPORT, TODAY, TOKEN } from './constants';
import MAP_STYLE from './styles.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import MarkerItem from "../MarkerItem";

const Map = () => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // replace it with the react-query
  useEffect(() => {
    setIsLoading(true);
    getData(TODAY()).then(data => {
      setData(data);
      setIsLoading(false)
    });
  }, []);

  return isLoading
    ? 'Loading...'
    : <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={TOKEN}
      onViewportChange={setViewport}
      mapStyle={MAP_STYLE}
    >
      {data.map(marker => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </ReactMapGL>
};

export default Map;
