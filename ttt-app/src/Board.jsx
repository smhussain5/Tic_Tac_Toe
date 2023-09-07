import React from 'react'
import { useState } from 'react';
import { Square } from './Square'
import './board.css'

export const Board = () => {
  // State
  const [sqArray, setSqArray] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const [turnStatus, setTurnStatus] = useState('X');

  //Determine Winner Function
  function determineWinner(arr) {
    let winArrX = [];
    let winArrO = [];
    let gameSolutions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8]
    ];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'X') {
        winArrX.push(i);
      } else if (arr[i] === 'O') {
        winArrO.push(i);
      }
    }
    for (let i = 0; i < gameSolutions.length; i++) {
      if (JSON.stringify(winArrX) === JSON.stringify(gameSolutions[i])) {
        alert("X WINS!");
      } else if (JSON.stringify(winArrO) === JSON.stringify(gameSolutions[i])) {
        alert("O WINS!");
      }
    }
  }

  // Handle Click Function
  function handleClick(i) {
    const sqArrayLatest = sqArray.slice();
    if (sqArrayLatest[i] != null) {
      return
    } else {
      if (xTurn) {
        sqArrayLatest[i] = 'X';
        determineWinner(sqArrayLatest);
        setTurnStatus('O');
      } else {
        sqArrayLatest[i] = 'O';
        determineWinner(sqArrayLatest);
        setTurnStatus('X');
      }
    }
    setSqArray(sqArrayLatest);
    setXTurn(!xTurn);
  }

  // Return Component
  return (
    <div className='flex-col font-sans'>
      <div className='text-center font-bold flex justify-center'>
        <h1>Let's play Tic-Tac-Toe!</h1>
      </div>
      <div className='flex'>
        <Square value={sqArray[0]} onClick={() => handleClick(0)} />
        <Square value={sqArray[1]} onClick={() => handleClick(1)} />
        <Square value={sqArray[2]} onClick={() => handleClick(2)} />
      </div>
      <div className='flex'>
        <Square value={sqArray[3]} onClick={() => handleClick(3)} />
        <Square value={sqArray[4]} onClick={() => handleClick(4)} />
        <Square value={sqArray[5]} onClick={() => handleClick(5)} />
      </div>
      <div className='flex'>
        <Square value={sqArray[6]} onClick={() => handleClick(6)} />
        <Square value={sqArray[7]} onClick={() => handleClick(7)} />
        <Square value={sqArray[8]} onClick={() => handleClick(8)} />
      </div>
      <div className='text-center font-bold flex justify-center'>
        <h1>It is {turnStatus}'s turn!</h1>
      </div>
    </div>
  )
}

export default Board