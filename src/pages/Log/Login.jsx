import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import QuizzAble from '../../assets/Quizzable.png';
// import Context from "../../Context/Context";

import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar.jsx';
import './Login.css';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [passErr, setPassErr] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    if (!name || !password) {
      return;
    }

    if (!nameErr || !passErr) {
      localStorage.setItem('name', name);
      localStorage.setItem('code', password);
      navigate('/');
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="joinOuterContainer">
      <NavBar />
      {localStorage.getItem('name') == null ? (
        <div className="joinInnerContainer" style={{ marginTop: '15px' }}>
          {/* <img src={QuizzAble} className="avPic" alt="QuizzAble" /> */}
          <h1 className="heading">Login</h1>
          <div>
            <input
              name="name"
              style={{ fontSize: '17px' }}
              value={name}
              placeholder="Group Name"
              className="joinInput"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
                setNameErr('');
              }}
              onBlur={() => {
                if (!name) setNameErr('Please enter a valid name');
                if (name.trim() == '') setNameErr('Please enter a valid name');
              }}
            />
            {nameErr && <p className="namep">{nameErr}</p>}
          </div>
          <div>
            <input
              style={{ fontSize: '17px' }}
              name="code"
              placeholder="Code"
              value={password}
              className="joinInput mt-20"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
                setPassErr('');
              }}
              onBlur={() => {
                if (!password) setPassErr('Please enter a valid code');
                if (password.trim() == '')
                  setPassErr('Please enter a valid code');
              }}
            />
            {passErr && <p className="passp">{passErr}</p>}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '15px',
            }}
          ></div>
          <button
            // className={'button mt-20'}
            onClick={login}
            style={{
              paddingLeft: '100px',
              paddingRight: '100px',
              color: 'white',
            }}
          >
            <p style={{ fontSize: '17px' }}>Login</p>
          </button>
        </div>
      ) : (
        <h1>You're Already Logged In</h1>
      )}
      <Footer />
    </div>
  );
}
