import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { useSpring, animated } from 'react-spring'
import InfoCard from '../components/InfoCard'
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded'
import TotalSales from '../components/TotalSales'

const Home = () => {
  const [picked, setPicked] = useState(0)
  const [shipped, setShipped] = useState(0)
  const [delivered, setDelivered] = useState(0)
  const [invoice, setInvoice] = useState(0)

  const animateIncrement = (setter, targetValue) => {
    return useSpring({
      from: { value: 0 },
      to: { value: targetValue },
      onFrame: (props) => {
        setter(Math.round(props.value))
      },
      config: { duration: 30000000000 }, // Adjust the duration here (in milliseconds)
    })
  }

  useEffect(() => {
    setPicked(1256)
    setShipped(12)
    setDelivered(15)
    setInvoice(7)
  }, []) // Set initial values

  return (
    <div>
      <Box sx={{ margin: 0, padding: 3 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginX: 3,
            borderRadius: 2,
            padding: 0,
          }}
        >
          <Grid item md={3}>
            <InfoCard
              card={{
                icon: <ViewInArRoundedIcon fontSize="large" color="tertiary" />,
                title: 'Picked',
                subTitle: picked,
                mx: 3,
                my: 0,
                spring: animateIncrement(setPicked, 1256),
              }}
            />
          </Grid>
          <Grid item md={3}>
            <InfoCard
              card={{
                icon: <LocalShippingIcon fontSize="large" color="tertiary" />,
                title: 'Shipped',
                subTitle: shipped,
                mx: 3,
                my: 0,
                spring: animateIncrement(setShipped, 12),
              }}
            />
          </Grid>
          <Grid item md={3}>
            <InfoCard
              card={{
                icon: (
                  <CheckCircleOutlineIcon fontSize="large" color="tertiary" />
                ),
                title: 'Delivered',
                subTitle: delivered,
                mx: 3,
                my: 0,
                spring: animateIncrement(setDelivered, 15),
              }}
            />
          </Grid>
          <Grid item md={3}>
            <InfoCard
              card={{
                icon: <ReceiptRoundedIcon fontSize="large" color="tertiary" />,
                title: 'Invoice',
                subTitle: invoice,
                mx: 3,
                my: 0,
                spring: animateIncrement(setInvoice, 7),
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <TotalSales />
    </div>
  )
}

export default Home