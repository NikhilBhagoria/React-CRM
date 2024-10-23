import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './routes/index.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme/theme.js'

const router = createBrowserRouter(Routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>,
)
