import { useEffect, useState } from "react";

type CountdownResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

function calculate(targetDate: Date): CountdownResult {
  const now = new Date().getTime();
  const target = targetDate.getTime();

  const diff = target - now;

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isFinished: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, isFinished: false };
}

export default function useCountdown(targetDate: Date) {
  const [time, setTime] = useState<CountdownResult>(() =>
    calculate(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculate(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}