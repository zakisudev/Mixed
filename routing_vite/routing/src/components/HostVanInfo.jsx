import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanInfo() {
  const { currentVan } = useOutletContext();

  if (!currentVan || currentVan.length === 0) {
    return <h1>Loading . . .</h1>;
  }

  return (
    <>
      {currentVan && (
        <section className="host-van-detail-info">
          <h4>
            Name: <p>{currentVan[0].name}</p>
          </h4>
          <h4>
            Category: <p>{currentVan[0].type}</p>
          </h4>
          <h4>
            Description: <p>{currentVan[0].description}</p>
          </h4>
          <h4>
            Visibility: <p style={{ display: 'inline' }}>Public</p>
          </h4>
        </section>
      )}
    </>
  );
}

export default HostVanInfo;
