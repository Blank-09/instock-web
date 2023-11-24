import * as React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { TextField } from '@mui/material'
import {
  Container,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Button,
} from '@mui/material'

import image from '../assets/react.svg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // color: theme.palette.text.secondary,
}))

function Details() {
  return (
    <>
      <Item sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ textAlign: 'left', mt: 1 }}>
          General Informations
        </Typography>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">First Name</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter your first name"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">Last Name</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter your last name"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">Birthday</Typography>
            <TextField
              id="outlined-basic"
              placeholder="dd/MM/yyy"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">Gender</Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                sx={{ mt: 1 }}
                value={1}
              >
                <MenuItem selected>Select Gender</MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">Email</Typography>
            <TextField
              id="outlined-basic"
              placeholder="name@company.com"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Typography variant="h6">Phone Number</Typography>
            <TextField
              id="outlined-basic"
              placeholder="+12-345 678 910"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>

        {/* Address  */}

        <Typography variant="h5" sx={{ textAlign: 'left', mt: 5 }}>
          Address
        </Typography>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} md={12} lg={8}>
            <Typography variant="h6">Address</Typography>
            <TextField
              id="outlined-basic"
              placeholder="Enter your home Address"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Typography variant="h6">Number</Typography>
            <TextField
              id="outlined-basic"
              placeholder="No."
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h6">City</Typography>
            <TextField
              id="outlined-basic"
              placeholder="City"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h6">ZIP</Typography>
            <TextField
              id="outlined-basic"
              placeholder="ZIP"
              size="small"
              fullWidth
              variant="outlined"
              sx={{ mt: 1 }}
            />
          </Grid>
        </Grid>
        <Grid sx={4} mt={3}>
          <Button variant="contained">Save All</Button>
        </Grid>
      </Item>
    </>
  )
}

function ProfileDisplay() {
  return (
    <>
      <Item>
        <Grid container xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 2, pl: 1 }}>
            Profile
          </Typography>
        </Grid>
        <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <img
            src={image}
            width="130px"
            height="130px"
            style={{ border: '3px solid lightblue', borderRadius: '70px' }}
          />
        </div>
        <Typography></Typography>
      </Item>
    </>
  )
}

export default function FullWidthGrid() {
  return (
    <Container sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <ProfileDisplay />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Details />
        </Grid>
      </Grid>
    </Container>
  )
}
