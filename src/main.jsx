import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './Pages/Banner/Banner.jsx'
import About from './Pages/About/About.jsx'
import Resume from './Pages/Resume/Resume.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <About />
        <Resume />
      </>
    )
  },
  {
    path: '/about',
    element: <About />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
