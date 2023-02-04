import React from 'react';
import Card from './Card';

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
                <Card
                  name={vans.name}
                  image={vans.imageUrl}
                  price={vans.price}
                  type={vans.type}
                />
              </div>
            );
          })}
        </div>
      </div>
      <footer>Ⓒ 2022 #VANLIFE</footer>
    </>
  );
}
