'use client';

import ListItem from './ListItem';
import Logo from './Logo';
import NavMenu, { Menu } from './NavMenu';
import { useRef, useState } from 'react';
import MenuContent from './MenuContent';
import MenuArrow from './MenuArrow';
import About from './menu-content/About';
import Career from './career/Career';
import Languages from './menu-content/Languages';
// import { HiMoon, HiSun } from 'react-icons/hi';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export type MenuAnimationDirection = "left" | "right" | "down"

export default () => {
    const innerRef = useRef<HTMLDivElement>(null);
    const resetMenuTimeoutRef = useRef<NodeJS.Timeout>()
    const [prevOrder, setPrevOrder] = useState(0);
    const [menuHeight, setMenuHeight] = useState(0);
    const [menuAnimationDirection, setMenuAnimationDirection] = useState<MenuAnimationDirection>("down")
    const [menu, setMenu] = useState<Menu>({ navItemRect: undefined, width: 400, order: 0 })
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter();

    const resetMenu = () => {
        resetMenuTimeoutRef.current = setTimeout(() => {
            setMenuAnimationDirection("down")
            setMenu({ navItemRect: undefined, width: 400, order: 0 })
            setPrevOrder(0);
            setShowMenu(false)
        }, 100)
    }

    const cancelResetMenu = () => {
        clearTimeout(resetMenuTimeoutRef.current)
    }

    const onListItemEnter = (navItemRect: DOMRect | undefined, width: number, order: number) => {
        cancelResetMenu()

        if (order === 0)
            setMenuAnimationDirection("down")
        else if (order > menu.order)
            setMenuAnimationDirection("right")
        else
            setMenuAnimationDirection("left")
        setShowMenu(true);

        setPrevOrder(menu.order);
        setMenu({ width, navItemRect, order })
    }

    return (
        <header className="absolute left-0 w-full px-4">
            <div ref={innerRef} className='max-w-[1080px] mx-auto'>
                <div className='p-4'>
                    <div className="flex gap-4">
                        <Link href="/" className='flex'>
                            <Logo />
                        </Link>

                        <nav className="flex flex-1">
                            <ul className="list-reset flex cursor-default items-center">
                                <ListItem
                                    order={1}
                                    onMouseEnter={onListItemEnter}
                                    onMouseLeave={resetMenu}
                                    width={600}
                                    activeOrder={menu.order}
                                >
                                    career
                                </ListItem>

                                <ListItem
                                    order={2}
                                    onMouseEnter={onListItemEnter}
                                    onMouseLeave={resetMenu}
                                    width={450}
                                    activeOrder={menu.order}
                                >
                                    about
                                </ListItem>

                                <ListItem
                                    order={3}
                                    onMouseEnter={onListItemEnter}
                                    onMouseLeave={resetMenu}
                                    width={400}
                                    activeOrder={menu.order}
                                >
                                    languages
                                </ListItem>
                            </ul>
                        </nav>

                        <nav className='my-3 mx-4 text-sm'>
                            <Button onClick={() => router.push('contact')}>
                                contact
                            </Button>
                        </nav>
                    </div>

                    <div
                        className='absolute top-[100%] left-0 z-[1] w-full h-[1000px] duration-300 transition-all'
                        style={{ pointerEvents: showMenu ? 'initial' : 'none' }}
                    >
                        <MenuArrow
                            show={showMenu}
                            menu={menu}
                            prevOrder={prevOrder}
                        />

                        <NavMenu
                            show={showMenu}
                            navRef={innerRef}
                            menu={menu}
                            height={menuHeight}
                            prevOrder={prevOrder}
                            onMouseEnter={cancelResetMenu}
                            onMouseLeave={resetMenu}
                        >
                            <MenuContent
                                order={1}
                                menu={menu}
                                width={600}
                                animationDirection={menuAnimationDirection}
                                setMenuHeight={setMenuHeight}
                                background='bg-gray-100'
                            >
                                <Career navOrder={2} menu={menu} />
                            </MenuContent>

                            <MenuContent
                                order={2}
                                menu={menu}
                                width={450}
                                animationDirection={menuAnimationDirection}
                                setMenuHeight={setMenuHeight}
                            >
                                <About />
                            </MenuContent>

                            <MenuContent
                                order={3}
                                menu={menu}
                                width={400}
                                animationDirection={menuAnimationDirection}
                                setMenuHeight={setMenuHeight}
                            >
                                <Languages />
                            </MenuContent>
                        </NavMenu>
                    </div>
                </div>
            </div>
        </header>
    )
}