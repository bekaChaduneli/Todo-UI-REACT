import style from "./Date.module.css";
import { useEffect } from "react";
function DateFunc({
  setClockState,
  clockState,
  setClockStatePm,
  clockStateDay,
  setClockStateDay,
  clockStatePm,
}) {
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
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
        <h1 className={`${style.pm}`}>{clockStatePm}</h1>
        <h1 className={`${style.time}`}>{clockState}</h1>
        <h1 className={`${style.day}`}>{clockStateDay}</h1>
      </div>
    </>
  );
}

export default DateFunc;
