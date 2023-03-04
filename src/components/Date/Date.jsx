import style from "./Date.module.css";
import { useEffect, useState } from "react";
function DateFunc({
  setClockState,
  clockState,
  setClockStatePm,
  clockStateDay,
  setClockStateDay,
  clockStatePm,
}) {
  const [time, setTime] = useState(new Date());
  const [weekdays, setWeekdays] = useState(0);
  const days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
  const currDay = time.getDate();
  const rightDay = weekdays + currDay;
  const currentDay = days[rightDay];
  useEffect(() => {
    if (rightDay > 6) {
      setWeekdays(-7);
    }
    if (rightDay > 13) {
      setWeekdays(-14);
    }
    if (rightDay > 20) {
      setWeekdays(-21);
    }
    if (rightDay > 27) {
      setWeekdays(-28);
    }
    if (rightDay === 1) {
      setWeekdays(0);
    }
    setInterval(() => {
      const date = new Date();
      setTime(date);
      if (date.toLocaleTimeString().length > 10) {
        setClockState(date.toLocaleTimeString().slice(0, 5));
        setClockStatePm(date.toLocaleTimeString().slice(9, 11));
      } else {
        setClockState(date.toLocaleTimeString().slice(0, 4));
        setClockStatePm(date.toLocaleTimeString().slice(8, 10));
      }
      setClockStateDay(date.getDate());
    }, 1000);
  }, []);
  return (
    <>
      <div>
        <div className="flex flex-row gap-2">
          <h1 className={`${style.pm}`}>{clockStatePm}</h1>
          <h1 className={`${style.time}`}>{clockState}</h1>
        </div>
        <div className="flex flex-row gap-2">
          <h1 className={`${style.day}`}>{clockStateDay}</h1>
          <h1 className={`${style.weekday}`}>{currentDay}</h1>
        </div>
      </div>
    </>
  );
}

export default DateFunc;
