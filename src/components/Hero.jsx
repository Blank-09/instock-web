import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { Link as RouterLink } from 'react-router-dom'

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Chip
          sx={{ mb: 1 }}
          label={
            <span>
              Want to learn more about{' '}
              <Link
                sx={{ fontWeight: 600, textDecoration: 'none' }}
                component={RouterLink}
                to="/about"
              >
                Instock About. →
              </Link>
            </span>
          }
          variant="outlined"
        />

        <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
          Empower Tomorrow, <br />
          One Innovation at a Time
        </Typography>

        <Typography variant="body1" fontSize="18px" maxWidth="sm">
          Optimize operations with efficient inventory management
          <br />
          for businesses and empower individuals to excel in dynamic control.
        </Typography>

        <Box sx={{ mt: 6 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/register"
            size="large"
            sx={{ mr: 2 }}
          >
            Register
          </Button>
          <Button
            component={RouterLink}
            to="/login"
            variant="outlined"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
