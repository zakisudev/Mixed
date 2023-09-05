import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  return (
    <>
      <div className="cds">
        <h1>Explore our van options</h1>
        <div className="filters">
          <button>Simple</button>
          <button>Luxury</button>
          <button>Rugged</button>
          <p>Clear filters</p>
        </div>
        <div className="lists">
          {vans.map((vans) => {
            return (
              <div>
                <Link to={`/vans/${vans.id}`}>
                  <Card
                    key={vans.id}
                    name={vans.name}
                    image={vans.imageUrl}
                    price={vans.price}
                    type={vans.type}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
