import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let x = 0;
  const [count, setCount] = useState(1);
  const handle = () =>{
    x += 1;
    if(x ===3){
      setCount(count*2);
      x = 0;
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
