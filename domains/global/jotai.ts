import { MenuAnimationDirection } from '@/components/navigation/NavDesktop';
import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage('darkMode', false)
export const showDesktopMenuFoldable = atom(false);
export const desktopMenuAnimationDirection = atom<MenuAnimationDirection>("down");
export const desktopPreviousOrder = atom(0);