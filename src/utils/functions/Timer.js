import { useEffect, useState } from "react";
import { useDataContext } from "../../context";

export function Timer() {
  const { isOpen } = useDataContext();
  const [time, setTime] = useState({
    minute: 14,
    second: 59,
  });

  let countDownDate = new Date().getTime() + 15 * 60 * 1000;
  function getTime() {
    let timeInterval = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for minutes and seconds

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (seconds < 10) {
        seconds = "0" + seconds;
      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      setTime({ ...time, minute: minutes, second: seconds });

      if (distance < 0) {
        clearInterval(timeInterval);
        setTime({ ...time, status: "Timeout" });
      }
    }, 1000);
  }
  useEffect(() => {
    if (!isOpen) {
      getTime();
    }
  }, [isOpen]);
  return (
    <>
      {!time.status ? (
        <span>{`${time.minute}:${time.second}`}</span>
      ) : (
        <span className="text-red-400">{time.status}</span>
      )}
    </>
  );
}
