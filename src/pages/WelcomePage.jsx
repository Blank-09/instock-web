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
        height: '100vh',
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
    </div>
  )
}
