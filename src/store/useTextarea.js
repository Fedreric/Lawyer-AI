import { create } from "zustand";

const useStore = create((set) => ({
    resume: '',
    setResume: (newResume) => set({ resume: newResume}),
}));

export default useStore

 