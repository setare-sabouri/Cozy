import { create } from "zustand";

export const useStore = create((set) => ({
  theme: "light",

  color: "#cebd6d",
  setColor: (color) => set({ color }),

  testvalue:1,
  setMagnitude:(magnitude)=>set({magnitude})


}));