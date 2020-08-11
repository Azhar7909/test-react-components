import React, { useState } from 'react'
import TimerButton from './TimerButton';

export default function Timer() {
    // const [minuts, setMinuts] = useState(25)
    // const [seconds, setseconds] = useState(0)
    // const [isOn, setIsOn] = useState(false)

    function startTimer() {
        console.log('Starting timer.');
      }
    
    function  stopTimer() {
        console.log('Stopping timer.');
      }
    
    function resetTimer() {
        console.log('Resetting timer.');
      }
    return (
        <div className="timer-container">
          <div className="time-display"></div>
          <div className="timer-button-container">
            <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
            <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
            <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
          </div>
        </div>
      );
}
