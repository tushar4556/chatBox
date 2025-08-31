

import { useEffect, useState } from 'react'
import './App.css'
import './index.css'

const WS_URL = "http://localhost:3000"

function App() {

  const [messages, setMessage] = useState();

  useEffect(() => {
    const ws =new WebSocket(WS_URL);
    ws.onmessage = (e) => {
      setMessage( (message) => [...message, e.data])
    }

  },[])
  

  return (
    <div className='min-h-screen bg-black flex items-center justify-center p-4'>
      <div className='bg-gray-1000 border border-amber-50 rounded-lg shadow-lg w-full max-w-md p-6 '>
        <h1 className='text-4xl font-dotmatrix'>Hello</h1>
      </div>
    </div>
  )
}

export default App
