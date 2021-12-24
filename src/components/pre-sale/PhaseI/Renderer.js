import React from 'react';
import Countdown from 'react-countdown';
import Opened from './Opened';
import CountingDown from './CountingDown';

const opensIn = 1639836000000
// const opensIn = Date.now() + 10000;

const renderer = ({ days, hours, minutes, seconds, completed }) => {

  if (completed)
    return <Opened />

  return <CountingDown 
    counter={`${days}:${hours}:${minutes}:${seconds}`} 
    opensIn={opensIn}
  />
  
};

const PhaseI = () => {
  return <Countdown
    date={opensIn}
    renderer={renderer}
  />;
}
 
export default PhaseI;