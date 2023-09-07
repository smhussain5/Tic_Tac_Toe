import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './Board.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex justify-center items-center w-full h-screen'>
      <Board />
    </div>
  </React.StrictMode>
)
