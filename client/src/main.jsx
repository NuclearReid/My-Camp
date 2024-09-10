import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import NoMatch from './pages/NoMatch'
import Landing from './pages/Landing'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Landing />
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router ={router} />
)
