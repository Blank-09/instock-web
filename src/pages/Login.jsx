import React from 'react'
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
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import axios from 'axios'
import InputAdornment from '@mui/material/InputAdornment'
import Alert from '@mui/material/Alert'

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
        target="_blank"
        href="https://github.com/blank-09/"
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
  useEffect(() => {
    if (localStorage.getItem('Authenticated')) {
      navigate('/user')
    }
  }, [])

  const [message, setMessage] = useState('')
  const [remember, setRemember] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      const response = await axios.get('http://localhost:3001/users')
      const userExists = response.data.some(
        (user) =>
          user.email === data.get('email') &&
          user.password === data.get('password')
      )
      setMessage('')
      if (userExists) {
        localStorage.setItem('Authenticated', true)
        navigate('/user')
      } else {
        setMessage('Invalid Username or Password')
      }
      if (remember) {
        localStorage.setItem('credentials', JSON.stringify(newData))
      }
    } catch (error) {
      console.error('Error:', error)
    }
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
          }}
          elevation={0}
          variant="outlined"
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
                bgcolor: 'secondary.main',
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
                    type={visible ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setVisible((prev) => !prev)}
                            edge="end"
                          >
                            {visible ? (
                              <VisibilityIcon />
                            ) : (
                              <VisibilityOffIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        onChange={() => setRemember((prev) => !prev)}
                      />
                    }
                    label="Remember me"
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                type="submit"
                variant="contained"
                size="large"
              >
                {/* <Link
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  to={`/register`}
                > */}
                Login
                {/* </Link> */}
              </Button>
              <Grid container justifyContent="flex-end" spacing={2}>
                <Grid item>
                  <Link to>
                    <LinkMUI variant="body2">Forgot Password?</LinkMUI>
                  </Link>
                </Grid>
                <Grid item>
                  <LinkMUI component={Link} to={'/register'} variant="body2">
                    Create an account?
                  </LinkMUI>
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
