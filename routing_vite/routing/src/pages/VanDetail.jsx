import React from 'react';
import { useParams } from 'react-router-dom';

import '../App.css';

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setVan(data);
      });
  }, []);
  return (
    <div>
      <div className="van-detail-container">
        {van ? (
          <div className="van-detail">
            <img src={van.vans.imageUrl} />
            <button className={van.vans.type}>{van.vans.type}</button>
            <h2>{van.vans.name}</h2>
            <p className="price">
              <b>${van.vans.price}</b>/day
            </p>
            <p>{van.vans.description}</p>
            <button className="rent">Rent this van</button>
          </div>
        ) : (
          <h2>Loading . . .</h2>
        )}
      </div>
    </div>
  );
}
