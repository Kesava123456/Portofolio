import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Watchlists</h2>
      <input type="text" placeholder="Search" className="sidebar-search" />
      <nav>
        <NavLink 
          to="/" 
          className="sidebar-link" 
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'red' : 'transparent',
            color: isActive ? 'white' : 'inherit'
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/lists" 
          className="sidebar-link" 
          style={({ isActive }) => ({
            backgroundColor: isActive ? 'red' : 'transparent',
            color: isActive ? 'white' : 'inherit'
          })}
        >
          My Lists
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
