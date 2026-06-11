import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import './Home.css';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearchChange = (val) => {
    setSearchQuery(val);
  };

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-main">
        <Topbar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        <div className="home-content">
          <Outlet context={{ searchQuery }} />
        </div>
      </div>
    </div>
  );
}