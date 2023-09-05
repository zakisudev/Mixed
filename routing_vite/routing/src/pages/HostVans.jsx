import React from 'react';
import Lists from '../components/Lists';
import { NavLink, useParams } from 'react-router-dom';

function HostVans() {
  const [van, setVan] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        setVan(data.vans);
      });
  }, []);
  return (
    <div className="vans-container">
      <h1>Your listed vans</h1>
      {van.map((van) => {
        return (
          <>
            <NavLink to={`/host/vans/${van.id}`}>
              <Lists image={van.imageUrl} name={van.name} price={van.price} />
            </NavLink>
          </>
        );
      })}
    </div>
  );
}
export default HostVans;
