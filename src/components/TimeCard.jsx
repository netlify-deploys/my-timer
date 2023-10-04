import React, { useEffect, useRef, useState } from "react";
import "./timecard.css";

const TimeCard = () => {
  const [timerYears, setYears] = useState("00");
  const [timerMonths, setMonths] = useState("00");
  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMinutes, setMinutes] = useState("00");
  const [timerSeconds, setSeconds] = useState("00");
  const joiningDate = new Date("07/27/2019");
  let interval = useRef();
  let years, months, days, hours, minutes, seconds;
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - joiningDate.getTime();
      // console.log(difference);
      // const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      // const hours = Math.floor(
      //   (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      // );
      // const minutes = Math.floor(
      //   (difference % (1000 * 60 * 60 * 60)) / (1000 * 60)
      // );
      // const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      // console.log(days);

      seconds = Math.floor(difference / 1000);
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
      days = Math.floor(hours / 24);
      hours = hours % 24;
      months = Math.floor(days / 30);
      days = days % 30;
      years = Math.floor(months / 12);
      months = months % 12;

      if (difference < 0) {
        clearInterval(interval.current);
      } else {
        setYears(years);
        setMonths(months);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    // console.log(timerDays);
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="timecard-container">
      <div className="timecard">
        <div className="timecard-head">
          <div className="card-title">Cagemini Tech... </div>
          <div className="card-sub">
            {joiningDate.getDay()}/{joiningDate.getMonth()}/
            {joiningDate.getFullYear()}{" "}
          </div>
        </div>
        <div className="timecard-body">
          <div className="timerbody-container">
            <div className="timer-container">
              <div className="timer-title">YY</div>
              <div className="timer-value">{timerYears}</div>
            </div>
            <div className="timer-container">
              <div className="timer-title">MM</div>
              <div className="timer-value">{timerMonths}</div>
            </div>
            <div className="timer-container">
              <div className="timer-title">DD</div>
              <div className="timer-value">{timerDays}</div>
            </div>
            <div className="timer-container">
              <div className="timer-title">hh</div>
              <div className="timer-value">{timerHours}</div>
            </div>
            <div className="timer-container">
              <div className="timer-title">mm</div>
              <div className="timer-value">{timerMinutes}</div>
            </div>
            <div className="timer-container">
              <div className="timer-title">ss</div>
              <div className="timer-value">{timerSeconds}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
