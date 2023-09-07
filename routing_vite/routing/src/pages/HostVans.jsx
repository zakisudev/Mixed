import React from 'react';
import Lists from '../components/Lists';
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../apis';
import requireAuth from '../util';

export async function loader() {
  await requireAuth();
  return getHostVans();
}
function HostVans() {
  const vans = useLoaderData();

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
      <section>{hostVanEls}</section>
    </section>
  );
}
export default HostVans;
