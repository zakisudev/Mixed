import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import '../App.css';
import './van.css';

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();

  const [currentVan, setCurrentVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentVan(data.vans);
      });
  }, [params.id]);

  const search = location.state?.search || '';
  const filterBack = location.state?.type.typeFilter || 'All';

  return (
    <>
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <h2> Back to {filterBack}</h2>
      </Link>
      <section className="van-detail-container">
        {currentVan ? (
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
        ) : (
          <h2>Loading . . .</h2>
        )}
      </section>
    </>
  );
}
