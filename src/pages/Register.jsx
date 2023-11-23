import React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/blank-09/" target="_blank">
        AspireCoders
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// TODO remove, this demo shouldn't need to reset the theme.

export default function Register() {
  useEffect(() => {
    if (localStorage.getItem('Authenticated')) navigate('/home')
  }, [])
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  const [allowExtraEmails, setAllowExtraEmails] = useState(false)
  const [message, setMessage] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const newData = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    }
    const res = await axios.get('http://localhost:3004/users')
    const userExists = res.data.some((user) => user.email === data.get('email'))

    console.log(newData)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(data.get('email'))
    const isPasswordValid = data.get('password').length >= 6

    console.log(isEmailValid, isPasswordValid)
    if (userExists) {
      setMessage('User already exists')
    } else if (isEmailValid && isPasswordValid && allowExtraEmails) {
      try {
        const response = await axios.post(
          'http://localhost:3004/users',
          newData
        )
        const res = response.data
        console.log(res)
        setMessage('')
        if (userExists) {
          setMessage('User already exists')
          return
        }
        localStorage.setItem('Authenticated', true)
        navigate('/home')
      } catch (error) {
        setMessage(String(error))
        console.error(error)
      }
    } else if (!isEmailValid) {
      setMessage('Invalid Email')
    } else if (!isPasswordValid) {
      setMessage('Your password is very weak')
    } else if (!allowExtraEmails) {
      setMessage('Agree our terms and conditions')
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
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
                        // checked={remember}
                        onChange={() => setAllowExtraEmails((prev) => !prev)}
                      />
                    }
                    label="Agree our terms and conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account?
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
