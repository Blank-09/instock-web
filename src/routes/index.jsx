import Register from '../pages/Register'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Inventory from '../pages/Inventory'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import { createBrowserRouter, Outlet } from 'react-router-dom'
import UserRoutes from './UserRoutes'

// Routery
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
        element: <UserRoutes />,
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
])

export default router
