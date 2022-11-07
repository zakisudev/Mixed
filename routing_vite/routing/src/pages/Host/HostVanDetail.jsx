import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../apis';
import { requireAuth } from '../../util';

import '../van.css';

export async function loader({ params, request }) {
  await requireAuth(request);
  return await getHostVans(params.id);
}
export default function HostVanDetail() {
  const currentVan = useLoaderData();

  const activeStyles = {
    textDecoration: 'underline',
    fontWeight: 'bold',
  };

  return (
    <section className="current-van-detail">
      <Link to="../" relative="path" className="back-button">
        &larr; <h2> Back to all vans</h2>
      </Link>
      <div className="van-detail-container">
        <div className="new-detail">
          <div>
            <img src={currentVan.imageUrl} alt="" />
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
  );
}
