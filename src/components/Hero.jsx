import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { Link as RouterLink } from 'react-router-dom'
import ContactImage from '../../public/contactImg.svg'
import AboutImage from '../../public/aboutImg.svg'

const Info = () => {
  return (
    <Container
      sx={{
        my: 8,
      }}
    >
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'common.white',
          border: '#bbb solid 1px',
          borderRadius: 3,
          py: 8,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          rowSpacing={8}
        >
          {infoData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="body1">{item.subtitle}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const About = () => {
  return (
    <Container sx={{ my: 15 }}>
      <Typography variant="h3" textAlign="center" sx={{ mb: 1 }}>
        About Us
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Grid item sx={12} md={6}>
          <Typography variant="body1" sxtextAlign={'center'} sx={{ mb: 1 }}>
            About Us
          </Typography>
          <Typography variant="h4">
            Helping businesses succeed through the power of managing stock...
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            quidem repudiandae quasi magnam eligendi quis nobis quam dolor
            cupiditate, perspiciatis nisi eveniet tempore accusantium blanditiis
            officiis, accusamus molestias eos minima totam suscipit omnis in
            consequuntur! Nihil, vitae similique id corporis repudiandae cumque
            exercitationem distinctio explicabo inventore, perspiciatis autem
            provident? Repellendus voluptatibus sint debitis natus! Quia ipsam
            harum earum voluptatum sint eaque nulla fuga possimus impedit quos
            hic qui beatae quasi animi quae, ad suscipit dolor.
          </Typography>
        </Grid>
        <Grid item sx={12} md={6} textAlign={'center'}>
          <img
            src={AboutImage}
            style={{ width: '350px', height: '350px', marginTop: '30px' }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

const ContactForm = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 15 }}>
        <Box>
          <Typography variant="h3">Let's talk!</Typography>
          <Typography
            variant="body1"
            sx={{ mt: 3, maxWidth: { sm: '75%', md: '45%' } }}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </Typography>
        </Box>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={12} md={6} textAlign={'center'}>
            <div>
              <Typography variant="h3">Let's talk!</Typography>
              <Typography variant="p" sx={{ mt: 3 }}>
                Vivamus in nisl metus? Phasellus
              </Typography>
            </div>
            <Grid textAlign={'end'}>
              <img
                src={ContactImage}
                style={{ width: '250px', height: '250px', marginTop: '30px' }}
              />
            </Box>
          </Grid>
          <Grid item sx={12} md={6} maxWidth="sm">
            <Grid item xs={12}>
              <Typography variant="body1">Full Name</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Enter your full name"
                size="small"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: '0px',
                  },
                }}
                style={{ maxWidth: '100%' }}
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant="body1">Email</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Enter your email"
                size="small"
                fullWidth
                variant="outlined"
                InputProps={{
                  style: {
                    borderRadius: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Typography variant="body1">Message</Typography>
              <textarea
                id="outlined-basic"
                size="small"
                fullWidth
                variant="outlined"
                style={{ borderColor: '#b8bcc2' }}
                cols={70}
                rows={8}
                InputProps={{
                  style: {
                    borderRadius: '0px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} marginTop={5}>
              <Button
                variant="contained"
                style={{ borderRadius: '0px', width: '100%' }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const featureArray = [
  {
    icon: AiFillThunderbolt,
    title: 'Real-Time Tracking',
    description:
      'Instantly monitor and update inventory levels for precise stock information, facilitating prompt decision-making and operational efficiency.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Automated Alerts',
    description:
      'Receive notifications promptly regarding low stock, overstock, or expiring items, preventing potential issues and enabling proactive inventory management',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Barcode Scanning',
    description:
      'Simplify data entry with efficient barcode scanning, reducing errors and improving accuracy in item identification for streamlined inventory processes.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Order Management',
    description:
      'Streamline order processing, shipment tracking, and fulfillment within the portal for efficient customer order handling and smooth workflow.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Multi-Location Support',
    description:
      'Centralize control for managing inventory across locations, optimizing efficiency by providing a unified view and facilitating seamless stock movement.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'User Permissions',
    description:
      'Ensure data security with role-based access control, restricting portal access based on user roles, safeguarding sensitive information',
  },
]

const Feature = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 15 }}>
        <Typography variant="h3" textAlign={'center'}>
          Built to empover every team 😎
        </Typography>
        <Typography variant="body1" textAlign={'center'} marginBottom={8}>
          to manage and
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={15}
        >
          {featureArray.map((pts, i) => (
            <Grid key={i} item xs={12} md={6} lg={4} textAlign={'center'}>
              <pts.icon style={{ width: '50px', height: '50px' }} />
              <Typography variant="h5" fontWeight={'bold'}>
                {pts.title}
              </Typography>
              <Typography variant="body1">{pts.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

const Hero = () => {
  return (
    <>
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
        <Box position="absolute" sx={{ cursor: 'pointer' }} bottom="0">
          <RxChevronDown size="28px" />
        </Box>
      </Box>
      <Info />
      <About />
      <Feature />
      <ContactForm />
    </>
  )
}

export default Hero
