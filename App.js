import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import {useState} from 'react';

function App() 
{
  const [seconds , setSeconds] = useState(0)
  let currentCount = 0;
  const clearTimer = () => 
  {

  }
  const startTimer = () =>
  {
     setInterval(()  => 
     {
      setSeconds(seconds => seconds + 1)
     } , 1000)
  }
  const restartTimer = () =>
  {
      clearInterval(setSeconds(0))
      document.querySelector('#counter').remove()
  }


  return 
  (
     <div className ="counter-container">
         <button className = "clear-button" onClick={clearTimer} > clear</button>
         <button className = "start-button" onClick={startTimer}> start</button>
         <button className = "restart-button" onClick={restartTimer}> restart</button>
         <p id='counter'>{currentCount}</p>
     </div>
  );
}

export default App;
