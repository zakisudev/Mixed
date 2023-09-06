import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <p>{currentVan.name}</p>
      </h4>
      <h4>
        Category: <p>{currentVan.type}</p>
      </h4>
      <h4>
        Description: <p>{currentVan.description}</p>
      </h4>
      <h4>
        Visibility: <p style={{ display: 'inline' }}>Public</p>
      </h4>
    </section>
  );
}
