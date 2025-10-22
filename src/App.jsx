import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 style={{margin: "1rem"}}>Challenge: Easy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
        &#8593;
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
        &#8595;
        </button>
        <button onClick={() => setCount((count) => count = 0)}>
        &#8635;
        </button>
        <h2 style={{margin: "1rem"}}>The current Count is {count}</h2>
      </div>
    </>
  )
}

export default App
