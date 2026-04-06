import { useState, useEffect, useCallback, useRef } from "react";

export function useTimer(initialSeconds: number | null, onTimeUp: () => void) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds ?? 0);
  const [isRunning, setIsRunning] = useState(false);
  const onTimeUpRef = useRef(onTimeUp);
  onTimeUpRef.current = onTimeUp;

  useEffect(() => {
    if (initialSeconds !== null) {
      setSecondsLeft(initialSeconds);
      setIsRunning(true);
    }
  }, [initialSeconds]);

  useEffect(() => {
    if (!isRunning || initialSeconds === null) return;
    if (secondsLeft <= 0) {
      setIsRunning(false);
      onTimeUpRef.current();
      return;
    }
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [isRunning, secondsLeft, initialSeconds]);

  const stop = useCallback(() => setIsRunning(false), []);

  const formatTime = useCallback(() => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }, [secondsLeft]);

  return { secondsLeft, formatTime, stop, isRunning };
}
