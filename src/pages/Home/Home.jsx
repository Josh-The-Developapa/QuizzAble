import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './Home.css';
import QuizzAble from '../../assets/Quizzable.png';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <div className="App">
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
        <div style={{ marginTop: '-10px' }}>
          {' '}
          <h2>Welcome to QuizzAble {localStorage.getItem('name')}</h2>
          <div>
            <button style={{ borderRadius: '50px', padding: '30px' }}>
              <h2>Click Here to answer</h2>
              <img
                src={QuizzAble}
                className="logo"
                alt="React logo"
                style={{
                  borderWidth: '200px',
                  height: '150px',
                  objectFit: 'contain',
                }}
              />
            </button>
          </div>
        </div>

        {/* <h1>Welcome to QuizzAble</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
