import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

import '../van.css';

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState([]);

  const activeStyles = {
    textDecoration: 'underline',
    fontWeight: 'bold',
  };
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
      });
  }, []);

  if (!currentVan || currentVan.length === 0) {
    return <h1>Loading . . .</h1>;
  }

  return (
    currentVan && (
      <section className="current-van-detail">
        <Link to="../" relative="path" className="back-button">
          &larr; <h2> Back to all vans</h2>
        </Link>
        <div className="van-detail-container">
          <div className="new-detail">
            <div>
              <img src={currentVan[0].imageUrl} alt="" />
            </div>
            <div className="div">
              <button className={currentVan.type}>{currentVan.type}</button>
              <h2>{currentVan.name}</h2>
              <p className="price">
                <b>${currentVan.price}</b>/day
              </p>
            </div>
          </div>
        </div>
        <div className="host-detail-links">
          <div className="detail-nav">
            <NavLink
              to="."
              end
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Detail
            </NavLink>
            <NavLink
              to="pricing"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              style={({ isActive }) => (isActive ? activeStyles : null)}
            >
              Photos
            </NavLink>
          </div>
          <Outlet context={{ currentVan }} />
        </div>
      </section>
    )
  );
}
