import style from "./Date.module.css";
import { useEffect } from "react";
function DateFunc({ setClockState, clockState }) {
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  });
  return (
    <>
      <div onClick={console.log(clockState)} className={`${style.time}`}>
        {clockState}
      </div>
    </>
  );
}

export default DateFunc;
