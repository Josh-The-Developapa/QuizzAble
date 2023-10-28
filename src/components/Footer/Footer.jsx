import React from 'react';
import './Footer.css';
import AbleCorp from '../../assets/Able-Corp.jpeg';

function Footer() {
  return (
    <div className="footer">
      <div>
        <img
          src={AbleCorp}
          style={{
            height: '150px',
            objectFit: 'contain',
            marginRight: '10px',
            borderRadius: '25px',
          }}
        />
        <h2 style={{ color: 'black' }}>
          &copy; Able Corporation {new Date(Date.now()).getFullYear()}
        </h2>
      </div>

      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          minWidth: '400px',
        }}
      >
        <h2 style={{ color: 'black', marginBottom: '2px' }}>Built by:</h2>
        <div
          style={{
            color: '#000000',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ textAlign: 'left' }}>
              Joshua Mukisa Kiryowa, IB1 <br /> <b>Chairman, CTO</b>
            </li>
            <li style={{ textAlign: 'left' }}>
              <br />
              Emmanuel Asiimwe, IB1 <br />
              <b>Development Manager</b>
            </li>
            <li style={{ textAlign: 'left' }}>
              <br />
              Tahsan Samin, IB1 <br />
              <b>Tech Lead</b>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          margin: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          minWidth: '400px',
        }}
      >
        <h2 style={{ color: 'black', marginBottom: '2px' }}>
          Relevant members:
        </h2>
        <div
          style={{
            color: '#000000',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ textAlign: 'left' }}>
              <br />
              Akhil Muni, IB1 <br />
              <b>CFO</b> <b></b>
            </li>
            <li style={{ textAlign: 'left' }}>
              <br /> Khush Pratik Shah, IB1 <br />
              <b>CEO, Co-Founder</b>
            </li>
            <li style={{ textAlign: 'left' }}>
              <br />
              Joshua Obia, IB1 <br />
              <b>COO</b> <b></b>
            </li>

            <li style={{ textAlign: 'left' }}>
              <br />
              Netsanet Mengistie, IB1 <br /> <b>Head of Security</b>
            </li>

            <li style={{ textAlign: 'left' }}>
              <br />
              Harsh Dhedhi, IB1 <br /> <b>CMO</b>
            </li>

            <li style={{ textAlign: 'left' }}>
              <br />
              Alishaan Bhudwani, IB1 <br /> <b>Assistant CMO</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
