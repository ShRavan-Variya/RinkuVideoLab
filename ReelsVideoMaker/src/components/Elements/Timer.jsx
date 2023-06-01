import { useEffect, useState } from "react";
import moment from 'moment';

const Timer = ({ remainingTime, onTimerComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState(remainingTime);

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = moment.duration(timeRemaining);
      duration.subtract(1, 'seconds');
      setTimeRemaining(duration);
    }, 1000);

    if (moment.duration(timeRemaining).hours() <= 0 && moment.duration(timeRemaining).minutes() <= 0 && moment.duration(timeRemaining).seconds() <= 0) {
      clearInterval(interval);
      onTimerComplete();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining, onTimerComplete]);

  const formatTime = time => {
    const durationNew = moment.duration(time);
    return `${durationNew.hours()}:${durationNew.minutes()}:${durationNew.seconds()}`;
  };

  return <div>{formatTime(timeRemaining)}</div>;
};

export default Timer;
