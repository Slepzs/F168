import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useState, useEffect } from "react";
import { luxon } from "luxon";

interface TimerState {
  timer: number;
  intervalId?: NodeJS.Timeout;
  startTimer: () => void;
  stopTimer: () => void;
}

export const useTimerStore = create<TimerState>((set) => ({
  timer: 0,
  startTimer: () => {
    // Start the timer and update it every second
    const intervalId = setInterval(() => {
      set((state) => ({ timer: state.timer + 1 }));
    }, 1000);
    // Store the interval ID in the state so you can clear it later if needed
    set({ intervalId });
  },
  stopTimer: () => {
    // Clear the interval when you want to stop the timer
    const { intervalId } = useTimerStore.getState();
    clearInterval(intervalId);
  },
}));

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
