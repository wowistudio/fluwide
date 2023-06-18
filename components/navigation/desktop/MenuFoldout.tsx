import ListItem from "./ListItem"
import NavMenu, { Menu } from "../NavMenu"
import MenuArrow from "../MenuArrow"
import MenuContent from "../MenuContent"
import Career from "../career/Career"
import About from "../menu-content/About"
import { Ref, RefObject, useState } from "react"
import { useAtom } from "jotai"
import { desktopMenuAnimationDirection, showDesktopMenuFoldable } from "@/domains/global/jotai"
import Languages from "../menu-content/Languages"

export type MenuFoldoutProps = {
    resetMenu: () => void
    cancelResetMenu: () => void
    prevOrder: number
    menu: Menu
    innerRef: RefObject<HTMLDivElement>
}

const MenuFoldout: React.FC<MenuFoldoutProps> = ({ menu, prevOrder, resetMenu, cancelResetMenu, innerRef }) => {
    const [menuHeight, setMenuHeight] = useState(0);
    const [showMenu] = useAtom(showDesktopMenuFoldable)
    const [menuAnimationDirection] = useAtom(desktopMenuAnimationDirection)

    return (<div
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
    </div>)
}


export default MenuFoldout