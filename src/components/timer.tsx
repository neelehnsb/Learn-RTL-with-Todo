import { useEffect, useState } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{seconds}</div>;
};
