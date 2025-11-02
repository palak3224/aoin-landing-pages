import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    color: '#ea580c',
    fontWeight: '600',
  };

  return (
    <div>
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src="/logo.png" alt="Aoinstore logo" className="h-8" />
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/seller" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-gray-900">Sell Online</NavLink>
            <NavLink to="/pricing" style={({ isActive }) => isActive ? activeLinkStyle : undefined} className="text-gray-600 hover:text-gray-900">Pricing & Commission</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-orange-600 border border-orange-600 rounded hover:bg-orange-50 transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors">
              Start Selling
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar