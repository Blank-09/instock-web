// Pages
import Register from '../pages/Register'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Inventory from '../pages/Inventory'

// Components
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FileUpload from '../components/FileUpload'
import Footer from '../components/Footer'

// React Router
import { createBrowserRouter, Outlet } from 'react-router-dom'

// Routes
import UserRoutes from './UserRoutes'

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
        element: (
          <>
            <Hero />
            <Footer />
          </>
        ),
      },
    ],
  },
  {
    // NOTE: This is a Protected Route (only logged in users can access)
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
      {
        path: '/user/upload',
        element: <FileUpload />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

export default router
