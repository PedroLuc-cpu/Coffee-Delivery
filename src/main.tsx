import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CheckoutFilled } from './pages/CheckoutFilled/index.tsx'
import Intro from './pages/Intro/index.tsx'
import { CardCofferProvider } from './context/CardCofferContext.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Intro/>
      },

      {
        path:'CheckoutFilled',
        element:<CheckoutFilled/>
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CardCofferProvider>
      <RouterProvider router={router} />
    </CardCofferProvider>
  </React.StrictMode>,
)
