import React from 'react'
import { Card, Box, CardContent, Typography } from '@mui/material'

const InfoCard = ({ card }) => {
  const { icon, title, subTitle, mx, my } = card

  return (
    <div>
      <Card elevation={6} sx={{ mx, my, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }} pl={1}>
          <Box
            p={1}
            m={2}
            sx={{
              display: 'flex',
              bgcolor: 'primary.main',
              borderRadius: 2,
              alignItems: 'center',
            }}
          >
            {icon}
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary" component="div">
              {title}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={'bolder'}
              color="text.secondary"
              component="div"
            >
              {String(subTitle)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default InfoCard
