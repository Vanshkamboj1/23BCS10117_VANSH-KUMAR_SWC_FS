import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [obj, setObj] = useState([]);
  const[data, setData] = useState("empty");
  const submit =()=>{
    const input = document.querySelector('input').value;
    setObj([...obj, input]);
    setData(input);
  }
  const undo =()=>{
    setObj(obj.slice(0,-1));

  }
  useEffect(() => {
    setData(obj[obj.length - 1] || "empty")
  }, [obj]);
  return (
    <div>
      <input  placeholder="Enter " />
      <button onClick = {submit}>Submit</button>
      <button onClick = {undo}>Undo</button>
      <h1>"Last valid data is :"{data}</h1>
    </div>
  )
}

export default App
