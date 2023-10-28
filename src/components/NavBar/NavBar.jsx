import React from 'react';
import './NavBar.css';
import QuizzAble from '../../assets/Quizzable.png';
import AbleCorp from '../../assets/Able-Corp.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">
        {/* <img
          src={QuizzAble}
          style={{ height: '125px', objectFit: 'contain' }}
        /> */}
        <LazyLoadImage
          style={{ height: '125px', objectFit: 'contain' }}
          src={QuizzAble}
          effect="blur"
        />
      </Link>
      {localStorage.getItem('name') !== null ? (
        <button
          onClick={() => {
            localStorage.removeItem('name');
            navigate('/');
            window.location.reload();
          }}
          style={{ marginLeft: '20px', color: 'white' }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            navigate('/login');
          }}
          style={{ marginLeft: '20px', color: 'white' }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default NavBar;
