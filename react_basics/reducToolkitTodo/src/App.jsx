import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './compnents/AddTodo'
import Todos from './compnents/Todos'

function App() {


  return (
    <>
      <h1 className='text-3xl font-bold underline'>hi this is page</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App

