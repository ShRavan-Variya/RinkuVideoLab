import { useEffect, useState } from "react";
import moment from 'moment';

const Timer = ({ targetTime, onTimerComplete }) => {
    const [timeRemaining, setTimeRemaining] = useState(targetTime);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
  
      if (timeRemaining === 0) {
        clearInterval(interval);
        onTimerComplete();
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [timeRemaining, onTimerComplete]);
  
    const formatTime = time => {
      const duration = moment.duration(time * 1000); // Convert seconds to milliseconds
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    return <div>{formatTime(timeRemaining)}</div>;
};

export default Timer;
