import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <>
    <div className=" w-flex justify-center bg-violet-600 text-center mx-10 my-10  px-10 py-1" >
     <UserContextProvider >
      <h1 className=" text-blue-900 bg-blue-200 border-solid mx-1 my-0.2" >React with context </h1>
      <Login />
      <Profile />
     </UserContextProvider>
     </div>
    </>
  )
}

export default App
