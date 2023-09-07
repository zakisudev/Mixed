import React from 'react';
import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom';

import '../App.css';
import './van.css';
import { getVans } from '../apis';

export async function loader({ params }) {
  return getVans(params.id);
}
export default function VanDetail() {
  const location = useLocation();
  const currentVan = useLoaderData();

  const search = location.state?.search || '';
  const filterBack = location.state?.type.typeFilter || 'All';

  return (
    <>
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <h2> Back to {filterBack}</h2>
      </Link>
      <section className="van-detail-container">
        <div className="van-detail">
          <img src={currentVan.imageUrl} />
          <button className={currentVan.type}>{currentVan.type}</button>
          <h2>{currentVan.name}</h2>
          <p className="price">
            <b>${currentVan.price}</b>/day
          </p>
          <p>{currentVan.description}</p>
          <button className="rent">Rent this van</button>
        </div>
      </section>
    </>
  );
}
