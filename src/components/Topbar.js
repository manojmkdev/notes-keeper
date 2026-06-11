import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Topbar.css';

export default function Topbar({ searchQuery, onSearchChange }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem('nk_user') || '{}');
    setUser(u);
  }, []);

  const firstName = user.name ? user.name.split(' ')[0] : '';

  return (
    <header className="topbar">
      <div className="topbar-search-wrapper">
        <div className="topbar-search-box">
          <svg className="topbar-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input
            type="text"
            placeholder="Search notes..."
            className="topbar-search-input"
            value={searchQuery || ''}
            onChange={e => onSearchChange && onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button className="topbar-clear-btn" onClick={() => onSearchChange('')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="topbar-user" onClick={() => navigate('/profile')}>
        <span className="topbar-username">{firstName}</span>
        <div className="topbar-avatar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="7" r="4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  );
}