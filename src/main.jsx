import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Box, Grid, List, ListItem, Typography } from '@mui/material'

import theme from './theme'

import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Inventory from './pages/Inventory'
import Hero from './components/Hero'
import SideBar from './components/SideBar'
import ClearFix from './utils/ClearFix'

// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Hero />,
      },
      {
        path: '/user',
        element: (
          <Box
            sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
          >
            <ClearFix style={{ flexShrink: 0 }} />
            <Grid container sx={{ flex: 1, overflow: 'hidden' }}>
              <Grid
                sx={{ display: { xs: 'none', md: 'block' } }}
                item
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
              <Grid
                item
                sx={{ display: { xs: 'none', xl: 'block' } }}
                xs={12}
                xl={2}
              >
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
            </Grid>{' '}
          </Box>
        ),
        children: [
          {
            path: '/user/',
            element: <Home />,
          },
          {
            path: '/user/inventory',
            element: <Inventory />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
])

const root = document.getElementById('root')

// Render
ReactDOM.createRoot(root) //
  .render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  )
