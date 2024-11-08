import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from './component/context/User.jsx';

export default function App() {
  return (
    <>
    <UserContextProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </UserContextProvider>
    </>
  )
}
