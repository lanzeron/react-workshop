import React from 'react';
import ReactTooltip from "react-tooltip";
import { Marker } from 'react-map-gl';
import './styles.css';

const MarkerItem = ({ marker }) => {
  return (
    <>
      <ReactTooltip id={marker.label.uk} place="top" effect="solid">
        <h4>{marker.label.uk}</h4>
        <div>Виявленно: {marker.confirmed}</div>
        <div>Померло: {marker.deaths}</div>
        <div>Одужало: {marker.recovered}</div>
        <div>Хворіє: {marker.existing}</div>
        <div>Підозри: {marker.suspicion}</div>
      </ReactTooltip>
      <Marker key={marker.id} latitude={marker.lat} longitude={marker.lng} offsetLeft={-20} offsetTop={-10}>
        <div
          data-tip 
          data-for={marker.label.uk}
          className="marker">
          {marker.confirmed}
        </div>
      </Marker>
    </>
  );
};

export default MarkerItem;