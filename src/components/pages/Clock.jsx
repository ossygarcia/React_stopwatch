import React, { useState } from "react";
import "../pages/Clock.scss";

const Watch = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

  return (
    <div className="container">
      <div className="wrapper">
        <section>
          <p>{timerDays}</p>
          <small>Days</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerHours}</p>
          <small>Hours</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerMinutes}</p>
          <small>Minutes</small>
        </section>
        <span>:</span>
        <section>
          <p>{timerSeconds}</p>
          <small>Seconds</small>
        </section>
      </div>
    </div>
  );
};

Watch.defaultProps = {
  timerDays: 10,
  timerHours: 20,
  timerMinutes: 30,
  timerSeconds: 20,
};
export default Watch;
