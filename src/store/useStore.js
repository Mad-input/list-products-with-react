import { create } from 'zustand'

const useStore = create((set) => ({
  showModal: false,
  setShow: () => set((state) => ({ showModal: !state.showModal }))
}))

export default useStore
