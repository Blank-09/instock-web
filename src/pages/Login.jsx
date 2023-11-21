import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import LinkMUI from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Home, Message } from '@mui/icons-material'
import { red } from '@mui/material/colors'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <LinkMUI
        color="inherit"
        href="https://github.com/blank-09/"
        target="_blank"
      >
        AspireCoders
      </LinkMUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
    if (
      data.get('email') == 'skavin@gmail.com' &&
      data.get('password') == '1234' &&
      data.has('allowExtraEmails')
    ) {
      navigate('/home')
    } else if (data.get('allowExtraEmails') === 'off') {
      setMessage('Accept out terms and conditions')
    } else {
      setMessage('Invalid Username or Password')
    }
    console.log(data.get)
  }

  return (
    <Box
      sx={{
        background: 'rgb(249,250,251)',
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Container
        component="main"
        sx={{
          padding: '3rem 1.5rem',
        }}
      >
        <Paper
          style={{
            maxWidth: '500px',
            margin: 'auto',
            padding: '1.5rem 2rem',
            borderRadius: '5px',
          }}
          elevation={10}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              sx={{
                m: 1,
                p: 2,
                bgcolor: 'primary.main',
                width: '100px',
                height: '100px',
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src="https://cdn-icons-png.flaticon.com/128/9226/9226414.png"
              />
            </Avatar>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Typography variant="subtitle2" color={'red'} paddingY={3}>
                {message}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        required
                      />
                    }
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={'/register'}>
                    <LinkMUI variant="body2">Create an account?</LinkMUI>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </Box>
  )
}
