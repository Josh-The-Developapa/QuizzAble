import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';
import AbleCorp from '../../assets/Able-Corp.jpeg';
import QuizzAble from '../../assets/Quizzable.png';
// import useRainbow from "../rainbow-button/use-rainbow.hook";
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  // const colors = useRainbow({ intervalDelay: 1300 }); // Initialize the colors

  return (
    <div
      className="navbar"
      // style={colors}
    >
      {/* {" "} */}
      {/* Apply colors to the NavBar div */}
      <Link to="/">
        <img
          src={QuizzAble}
          style={{
            height: '125px',
            objectFit: 'contain',
            borderRadius: '10px', // Adjust the value as needed for your desired roundness
          }}
        />

        {/* <LazyLoadImage
					style={{ height: '125px', objectFit: 'contain' }}
					src={QuizzAble}
					effect="blur"
				/> */}
      </Link>
      {localStorage.getItem('name') !== null ? (
        <button
          onClick={() => {
            localStorage.removeItem('name');
            localStorage.removeItem('code');
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
