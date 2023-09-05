import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

import HostVanPricing from '../../components/HostVanPricing';

import '../van.css';
import HostVanPhotos from '../../components/HostVanPhotos';

function HostVanDetail() {
  const activeStyles = {
    textDecoration: 'underline',
    fontWeight: 'bold',
  };
  const { id } = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, []);
  return (
    <div>
      <Link to=".." relative="path" className="back-button">
        &larr; <h2> Back to all vans</h2>
      </Link>
      {/* &#x2190; Back to all vans </h2> */}
      <div className="van-detail-container">
        {van ? (
          <div className="current-van-detail">
            <div className="new-detail">
              <div>
                <img src={van[0].imageUrl} alt="" />
              </div>
              <div className="div">
                <button className={van[0].type}>{van[0].type}</button>
                <h2>{van[0].name}</h2>
                <p className="price">
                  <b>${van[0].price}</b>/day
                </p>
              </div>
            </div>
          </div>
        ) : (
          <h2>Loading . . .</h2>
        )}
      </div>
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
      <Outlet />
    </div>
  );
}

export default HostVanDetail;
