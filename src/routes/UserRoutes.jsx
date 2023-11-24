import React from 'react'

import { Box, Grid, List, ListItem, Typography } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'

import SideBar from '../components/SideBar'
import ClearFix from '../utils/ClearFix'

export default function UserRoutes() {
  const navigate = useNavigate()

  React.useEffect(() => {
    if (localStorage.getItem('Authenticated') !== 'true') navigate('/login')
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ClearFix style={{ flexShrink: 0 }} />
      <Grid
        container
        sx={{ flex: 1, overflow: 'hidden', position: 'relative' }}
      >
        <Grid
          sx={{
            height: '100%',
            zIndex: 10,
          }}
          item
          order={{ xs: 2, md: 0 }}
          xs={12}
          md={4}
          lg={3}
          xl={2}
        >
          <SideBar />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          xl={8}
          sx={{ height: '100%', overflow: 'auto' }}
        >
          <Outlet />
        </Grid>
        <Grid item sx={{ display: { xs: 'none', xl: 'block' } }} xs={12} xl={2}>
          <Box sx={{ p: 4 }}>
            <Typography>Here sidebar 2 will go here</Typography>
            <List>
              {Array(10)
                .fill()
                .map((_, i) => (
                  <ListItem key={i}>Item {i + 1}</ListItem>
                ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
