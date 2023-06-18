'use client';

import Logo from './Logo';
import { Menu } from './NavMenu';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NavListItems from './desktop/NavListItems';
import { useAtom } from 'jotai';
import { desktopMenuAnimationDirection, desktopPreviousOrder, showDesktopMenuFoldable } from '@/domains/global/jotai';
import MenuFoldoutDesktop from './desktop/MenuFoldout';
import { HiMenu } from 'react-icons/hi';
import MenuFoldoutTablet from './tablet/MenuFoldout';

export type MenuAnimationDirection = "left" | "right" | "down"

export default () => {
    const innerRef = useRef<HTMLDivElement>(null);
    const resetMenuTimeoutRef = useRef<NodeJS.Timeout>()
    const [prevOrder, setPrevOrder] = useAtom(desktopPreviousOrder);
    const [_, setMenuAnimationDirection] = useAtom(desktopMenuAnimationDirection)
    const [menu, setMenu] = useState<Menu>({ navItemRect: undefined, width: 400, order: 0 })
    const [showMenu, setShowMenu] = useAtom(showDesktopMenuFoldable)
    const [showMenuTablet, setShowMenuTablet] = useState(false)
    const router = useRouter();

    const resetMenu = () => {
        resetMenuTimeoutRef.current = setTimeout(() => {
            setMenuAnimationDirection("down")
            setMenu({ navItemRect: undefined, width: 400, order: 0 })
            setPrevOrder(0);
            setShowMenu(false)
        }, 100)
    }

    const cancelResetMenu = () => clearTimeout(resetMenuTimeoutRef.current)

    return (
        <div ref={innerRef} className='max-w-[1080px] mx-auto'>
            <div className='p-4'>
                <div className="flex gap-4">
                    <Link href="/" className='flex'>
                        <div className='my-2 mx-4 flex items-center justify-center'>
                            <Logo />
                        </div>
                    </Link>

                    <NavListItems
                        setShowMenu={setShowMenu}
                        menu={menu}
                        cancelResetMenu={cancelResetMenu}
                        setMenu={setMenu}
                        resetMenu={resetMenu}
                        setMenuAnimationDirection={setMenuAnimationDirection}
                        setPrevOrder={setPrevOrder}
                    />

                    <div className='flex-1 lg:hidden'></div>

                    <nav className='my-3 mx-4 text-sm'>
                        <Button variant="secondary" onClick={() => setShowMenuTablet(true)} className='lg:hidden'>
                            <HiMenu />
                        </Button>

                        <Button variant="secondary" onClick={() => router.push('contact')} className='hidden lg:block'>
                            contact
                        </Button>
                    </nav>
                </div>

                <MenuFoldoutDesktop
                    menu={menu}
                    prevOrder={prevOrder}
                    innerRef={innerRef}
                    resetMenu={resetMenu}
                    cancelResetMenu={cancelResetMenu}
                />

                <MenuFoldoutTablet showMenu={showMenuTablet} />
            </div>
        </div>
    )
}