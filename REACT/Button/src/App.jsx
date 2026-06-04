import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[x, setX] = useState(1);
  const [count, setCount] = useState(1);
  const handle = () =>{
    setX(x+1);
    if(x ===3){
      setCount(count*2);
      setX(1);
    }
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handle}>click</button>
    </div>
  )
}

export default App
