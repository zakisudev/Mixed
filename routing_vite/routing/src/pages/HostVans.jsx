import React from 'react';
import Lists from '../components/Lists';
import { Link } from 'react-router-dom';

function HostVans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const hostVanEls = vans.map((van) => {
    return (
      <div key={van.id}>
        <Link to={`/host/vans/${van.id}`}>
          <Lists image={van.imageUrl} name={van.name} price={van.price} />
        </Link>
      </div>
    );
  });

  return (
    <section className="vans-container">
      <h1>Your listed vans</h1>
      {vans.length > 0 ? (
        <section>{hostVanEls}</section>
      ) : (
        <h2>Loading . . .</h2>
      )}
    </section>
  );
}
export default HostVans;
