import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  if (!currentVan) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <h3 className="host-van-price">
      ${currentVan[0].price}
      <span> /day</span>
    </h3>
  );
}
