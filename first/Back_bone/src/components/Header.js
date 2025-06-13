import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#4CAF50' }}>
      <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
      <Link to="/schemes" style={{ margin: '10px', color: 'white' }}>Schemes</Link>
      <Link to="/weather" style={{ margin: '10px', color: 'white' }}>Weather</Link>
      <Link to="/prices" style={{ margin: '10px', color: 'white' }}>Prices</Link>
      <Link to="/forum" style={{ margin: '10px', color: 'white' }}>Forum</Link>
    </nav>
  );
}

export default Header;
