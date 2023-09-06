import React from 'react';
import Card from '../components/Card';
import { Link, useSearchParams } from 'react-router-dom';
import '../App.css';

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');

  React.useEffect(() => {
    fetch('/api/vans')
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayedVans.map((vans) => (
    <div key={vans.id}>
      <Link
        to={`/vans/${vans.id}`}
        state={{ search: `?${searchParams.toString()}`, type: { typeFilter } }}
      >
        <Card
          key={vans.id}
          name={vans.name}
          image={vans.imageUrl}
          price={vans.price}
          type={vans.type}
        />
      </Link>
    </div>
  ));
  return (
    <>
      <div className="cds">
        <h1>Explore our van options</h1>
        <div className="filters">
          <button
            className="van-type simple"
            onClick={() => setSearchParams('type=simple')}
          >
            Simple
          </button>
          <button
            className="van-type luxury"
            onClick={() => setSearchParams('type=luxury')}
          >
            Luxury
          </button>
          <button
            className="van-type rugged"
            onClick={() => setSearchParams('type=rugged')}
          >
            Rugged
          </button>
          <p onClick={() => setSearchParams({})}>Clear filters</p>
        </div>
        <div className="lists">{vanElements}</div>
      </div>
    </>
  );
}
