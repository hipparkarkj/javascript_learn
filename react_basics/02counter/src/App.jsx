import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  //let counter = 15

  //console.log(counter)
  const addValue = () => {
    //counter = counter + 1
    //console.log(counter)
    //setCounter(prevCounter => prevCounter + 1)
      if (counter < 20 ){
        setCounter(counter = counter +1)
      } else alert("counter need to smaller or equal to than 20")

    
  }

  const removeValue = () => {
    //counter= counter -1
    //console.log(counter)
    if(counter > 0){
      setCounter(counter -1 )
    
   }else alert("counter need to greater than 0")

  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={addValue} >
          Add Value {counter}
      </button>

      <button onClick={removeValue}>
        remove value {counter}
      </button>

      <p>footer: {counter}</p>
      

    </>
  )
}

export default App
