import React from 'react';
import './NavBar.css';
import QuizzAble from '../../assets/Quizzable.png';
import AbleCorp from '../../assets/Able-Corp.jpeg';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={QuizzAble}
          style={{ height: '125px', objectFit: 'contain' }}
        />
      </Link>
      {localStorage.getItem('name') !== null ? (
        <button
          onClick={() => {
            localStorage.removeItem('name');
            window.location.reload();
            navigate('/');
          }}
          style={{ marginLeft: '20px' }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigate('/login');
          }}
          style={{ marginLeft: '20px' }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default NavBar;
