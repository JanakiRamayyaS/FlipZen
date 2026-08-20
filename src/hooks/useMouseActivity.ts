import { useState, useEffect, useRef } from 'react';

export function useMouseActivity(timeoutMs: number = 3000) {
  const [isActive, setIsActive] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsActive(true);

      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        setIsActive(false);
      }, timeoutMs);
    };

    // Initial timer
    timerRef.current = window.setTimeout(() => {
      setIsActive(false);
    }, timeoutMs);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleMouseMove);
    window.addEventListener('keydown', handleMouseMove);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      window.removeEventListener('keydown', handleMouseMove);
    };
  }, [timeoutMs]);

  return isActive;
}
