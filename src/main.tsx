import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CheckoutFilled } from './pages/CheckoutFilled/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ path: '/CheckoutFilled', element: <CheckoutFilled /> }],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
