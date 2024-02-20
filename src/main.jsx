import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import { isDev } from './constants'

if (isDev) {
  console.log('Running in Development Mode')
}

// Axios
axios.defaults.baseURL = 'http://localhost:8080'

const root = document.getElementById('root')

// Render
ReactDOM.createRoot(root) //
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
