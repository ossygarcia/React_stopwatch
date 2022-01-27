import React, { useEffect, useState } from "react";
import Clock from "./components/pages/Clock";
import './global.scss'


const App = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHour] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  // const setTimer = () => {
  //   const countDown = new Date("Jan 8,2022").getTime();

  //   interval = setInterval(() => {
  //     const current = new Date().getTime();
  //     const distance = countDown - current;

  //     const days = Math.floor(distance / (24 * 60 * 60 * 1000));
  //     const hours = Math.floor(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60);
  //     const minute = Math.floor(distance % (60  * 60 * 1000)) / (1000 * 60);
  //     const seconds = Math.floor(distance % (60 * 1000)) / 1000;

  //     if (distance < 0) {
  //       clearInterval(interval.current);
  //     } else {
  //       setTimerDays(days);
  //       setTimerHour(hours);
  //       setTimerMinutes(minute);
  //       setTimerSeconds(seconds);
  //     }
  //   });
  // };
  // useEffect(() => {
  //   setTimer();
  // }, []);

  return (
    <div>
      <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
};

export default App;
