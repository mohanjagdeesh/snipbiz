import { create } from 'zustand'

export const useGlobalStore = create((set) => ({
  loading: false,
  user: undefined,
  isMobile: false,
  setIsMobile: (isMobile) => set((state) => ({ ...state, isMobile: isMobile }))
}))