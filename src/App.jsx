import { useState } from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

// Styles
import './App.css'

// Components
import Root from './layouts/Root/Root'
import Home from './pages/Home/Home'
import Influencers from './pages/Infulencers/Influencers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'Influencers',
        element: <Influencers/>
      }
    ]
  },
])

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
