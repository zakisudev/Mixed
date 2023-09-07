import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  if (!currentVan) {
    return <h1>Loading . . .</h1>;
  }
  return <img src={currentVan[0].imageUrl} className="host-van-detail-image" />;
}
