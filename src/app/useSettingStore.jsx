'use client'

import { create } from 'zustand';

import sliderMenu2 from '../../public/sidebar3-BackMenu.jpg'

const useSettingStore = create((set) => ({
    backgroundImage: sliderMenu2.src,
    backgroundColor: "#4caf50",
    namePage: 'Dashboard',
    menuOpen: false,
    setBackgroundImage: (image) => set({ backgroundImage: image }),
    setBackgroundColor: (color) => set({ backgroundColor: color }),
    setNamePage: (name) => set({ namePage:name }),
    toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
    setMenuOpen: (isOpen) => set({ menuOpen: isOpen }),
}));

export default useSettingStore;
