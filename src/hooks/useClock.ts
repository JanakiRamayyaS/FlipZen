import { useState, useEffect } from 'react';
import { getTimeState } from '../utils/time';
import type { TimeState } from '../utils/time';
import type { TimeFormat } from '../types';

export function useClock(timeFormat: TimeFormat = '12h'): TimeState {
  const [timeState, setTimeState] = useState<TimeState>(() => getTimeState(new Date(), timeFormat));

  useEffect(() => {
    const updateClock = () => {
      setTimeState(getTimeState(new Date(), timeFormat));
    };

    updateClock();

    // Use a precise 250ms check interval to catch second transitions promptly
    const interval = setInterval(updateClock, 250);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        updateClock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [timeFormat]);

  return timeState;
}
