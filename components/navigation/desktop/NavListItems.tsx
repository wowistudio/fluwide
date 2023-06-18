import ListItem from "./ListItem"
import { Menu } from "../NavMenu"
import { MenuAnimationDirection } from "../NavDesktop"
import { navItems } from "../content"

export type NavListItemsProps = {
    cancelResetMenu: () => void
    menu: Menu
    setMenu: (menu: Menu) => void
    setMenuAnimationDirection: (direction: MenuAnimationDirection) => void
    setShowMenu: (show: boolean) => void
    resetMenu: () => void
    setPrevOrder: (num: number) => void
}

const NavListItems: React.FC<NavListItemsProps> = ({
    resetMenu,
    setShowMenu,
    cancelResetMenu,
    menu,
    setMenu,
    setPrevOrder,
    setMenuAnimationDirection
}) => {
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
        <nav className="lg:flex lg:flex-1 hidden">
            <ul className="list-reset flex cursor-default items-center">
                {navItems.map(item => (
                    <ListItem
                        key={item.order}
                        order={item.order}
                        onMouseEnter={onListItemEnter}
                        onMouseLeave={resetMenu}
                        width={item.desktopMenuFoldoutWidth}
                        activeOrder={menu.order}
                    >
                        {item.title}
                    </ListItem>
                ))}
            </ul>
        </nav>
    )
}

export default NavListItems