import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './src/components/Layout';
import Home from './src/pages/Home';
import HostLayout from './src/components/HostLayout';
import About from './src/pages/About';
import Vans from './src/pages/Vans';

import Dashboard from './src/pages/Host/Dashboard';
import Income from './src/pages/Host/Income';
import Reviews from './src/pages/Host/Reviews';

import HostVanDetail from './src/pages/Host/HostVanDetail';
import VanDetail from './src/pages/VanDetail';
import VansList from './src/pages/Host/VansList';
import HostVanInfo from './src/components/HostVanInfo';
import HostVanPhotos from './src/components/HostVanPhotos';
import HostVanPricing from './src/components/HostVanPricing';

import './src/server';
import Page404 from './src/pages/404page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<VansList />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
