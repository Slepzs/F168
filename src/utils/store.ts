import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useState, useEffect } from "react";
import { luxon } from "luxon";

interface TimerState {
  time: Date | luxon.DateTime | null;
  setTime: () => void;
  timerActive: boolean;
  timesStore: string[];
  addToTimesStore: (time: string) => void;
  changeTimerStatus: () => void;
}

export const useTimeStore = create<TimerState>()(
  persist(
    (set, get) => ({
      time: null,
      timerActive: false,
      timesStore: [],
      setTime: () => set({ time: new Date() }),
      changeTimerStatus: () => set({ timerActive: !get().timerActive }),
      addToTimesStore: (time: string) =>
        set({ timesStore: [...get().timesStore, time] }),
    }),
    {
      name: "time-storage", // name of item in the storage (must be unique)
    }
  )
);

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
