import React from 'react'
import Button from '@mui/material/Button'
import { FaAmazon } from 'react-icons/fa'
import { SiFlipkart } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div
      style={{
        display: 'flex',
        height: '91.6vh',
        width: '100%',
        background: '#F0F8FF',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          color: 'darkblue',
          fontWeight: 'bolder',
          fontSize: '40px',
          marginTop: '100px',
        }}
      >
        Empowering Tomorrow,
      </h1>
      <h1
        style={{
          color: 'darkblue',
          fontWeight: 'bolder',
          fontSize: '40px',
          marginTop: '0px',
        }}
      >
        One Innovation at a Time.
      </h1>
      <h3
        style={{
          marginTop: '30px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        We empower businesses to streamline operations with efficient inventory
        management, while assisting individuals
      </h3>
      <h3
        style={{
          margin: '5px',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '20px',
        }}
      >
        in honing their skills and unlocking opportunities in the dynamic world
        of inventory control.
      </h3>
      <div style={{ marginTop: '40px' }}>
        <Button
          variant="contained"
          style={{ marginRight: '20px', width: '100px', padding: '10px' }}
        >
          <Link
            style={{ color: 'inherit', textDecoration: 'none' }}
            to={`/login`}
          >
            Sign Up
          </Link>
        </Button>
        <Button variant="outlined" style={{ width: '150px', padding: '10px' }}>
          Request Demo
        </Button>
      </div>
      <h2 style={{ color: 'darkblue', fontSize: '20px', marginTop: '50px' }}>
        Fueling the efficiency of over 30% of businesses globally...
      </h2>
      <div style={{ marginTop: '50px', display: 'flex', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '7px' }}>
          <FaAmazon />
          <p style={{ marginTop: '-5px' }}>Amazon</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '7px' }}>
          <SiFlipkart />
          <p style={{ marginTop: '-5px' }}>Flipkart</p>
        </div>
      </div>
      <div
        style={{
          marginTop: '60px',
          display: 'flex',
          gap: '5px',
          padding: '3px',
          paddingRight: '30px',
          paddingLeft: '30px',
        }}
      >
        <p>
          If there is any issue with working with the portal and logging in
          contact us
        </p>
        <a href="#">Click here</a>
      </div>
    </div>
  )
}
