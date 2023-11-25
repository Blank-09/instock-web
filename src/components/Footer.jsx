import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from 'react-icons/bi'

const links = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/aspirecoders',
    icon: <BiLogoFacebook />,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/aspirecoders/',
    icon: <BiLogoInstagram />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/aspirecoders',
    icon: <BiLogoTwitter />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/aspirecoders',
    icon: <BiLogoLinkedin />,
  },
]

const Footer = () => {
  return (
    <Paper
      variant="outlined"
      sx={{ p: 4, display: 'flex', justifyContent: 'space-between' }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {'© '}
        {new Date().getFullYear()} AspireCoders. All rights reserved.
      </Typography>

      <Box>
        {/* Social Links */}
        {links.map((link, index) => (
          <Button
            sx={{ mx: 1, p: 1, minWidth: 0 }}
            variant="text"
            key={index}
            href={link.url}
            target="_blank"
          >
            {link.icon}
          </Button>
        ))}
      </Box>
    </Paper>
  )
}

export default Footer
