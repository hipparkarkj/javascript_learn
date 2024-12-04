import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "kailas",
    age: 33
  }

let newArr = [1,2,3]

  return (
    <>
      <h1>app</h1>
      <h1 className="text-lg font -medium bg-green-400 text-black ">Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="chaiaurcode" btnText="click me"/>

     </>
  )
}

export default App
