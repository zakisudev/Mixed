import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import HostLayout from './src/components/HostLayout';
import About from './src/pages/About';
import Vans, { loader as vansLoader } from './src/pages/Vans';
import Login, {
  loader as loginLoader,
  action as loginAction,
} from './src/pages/Login';
localStorage.removeItem('loggedIn');

import Dashboard from './src/pages/Host/Dashboard';
import Income from './src/pages/Host/Income';
import Reviews from './src/pages/Host/Reviews';

import HostVans, { loader as hostVanLoader } from './src/pages/HostVans';
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from './src/pages/Host/HostVanDetail';
import VanDetail, { loader as vanDetailLoader } from './src/pages/VanDetail';
import HostVanInfo from './src/components/HostVanInfo';
import HostVanPhotos from './src/components/HostVanPhotos';
import HostVanPricing from './src/components/HostVanPricing';

import './src/server';
import NotFound from './src/pages/NotFound';
import { requireAuth } from './src/util';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route path="vans" element={<HostVans />} loader={hostVanLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
