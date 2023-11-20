import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Home = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h1">Hello World</Typography>
    </Box>
  )
}

export default Home
