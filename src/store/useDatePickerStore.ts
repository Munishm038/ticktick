// store/useDatePickerStore.ts
import { create } from "zustand";

interface DatePickerState {
  recurrence: "daily" | "weekly" | "monthly" | "yearly";
  interval: number;
  startDate: string | null;
  endDate: string | null;
  setRecurrence: (
    recurrence: "daily" | "weekly" | "monthly" | "yearly"
  ) => void;
  setInterval: (interval: number) => void;
  setStartDate: (startDate: string | null) => void;
  setEndDate: (endDate: string | null) => void;
}

const useDatePickerStore = create<DatePickerState>((set) => ({
  recurrence: "daily",
  interval: 1,
  startDate: null,
  endDate: null,
  setRecurrence: (recurrence) => set({ recurrence }),
  setInterval: (interval) => set({ interval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

export default useDatePickerStore;
