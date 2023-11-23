import React, { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material'
import InfoCard from '../components/InfoCard'
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import TotalSales from '../components/TotalSales'

const iconProps = {
  color: 'tertiary',
  fontSize: 'large',
}

const cards = [
  {
    icon: <ViewInArRoundedIcon {...iconProps} />,
    title: 'Picked',
    subTitle: 1256,
  },
  {
    icon: <LocalShippingIcon {...iconProps} />,
    title: 'Shipped',
    subTitle: 12,
  },
  {
    icon: <CheckCircleOutlineIcon {...iconProps} />,
    title: 'Delivered',
    subTitle: 15,
  },
  {
    icon: <ReceiptRoundedIcon {...iconProps} />,
    title: 'Invoice',
    subTitle: 7,
  },
]

const Home = () => {
  return (
    <Container sx={{ p: 3 }}>
      <Grid container spacing={2} mb={3}>
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <InfoCard {...card} />
          </Grid>
        ))}
      </Grid>

      <TotalSales />
      <TotalSales />
      <TotalSales />
    </Container>
  )
}

export default Home
