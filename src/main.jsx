import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'

import { ThemeProvider } from '@mui/material/styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import theme from './theme'
import App from './App'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Welcome from './pages/WelcomePage'
// Router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
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
