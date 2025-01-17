import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import AuthProvider from './Authprovider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <AuthProvider routes={ <RouterProvider router={Router}></RouterProvider>}>
  
   </AuthProvider>
   
  </StrictMode>,
)
