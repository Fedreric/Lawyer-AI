import { getResumes } from "@/helpers/helpersResume";
import { create } from "zustand";
const useStore = create((set) => ({
    resume: '',
    setResume: (newResume) => set({ resume: newResume}),
    resumeList: [],
    setResumeList: async (id) => set({ resumeList: await getResumes(id)}),
}));

export default useStore

 