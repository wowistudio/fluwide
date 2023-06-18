import { classes } from "@/lib/utils"
import { RefObject, useEffect, useRef, useState } from "react"

export interface Menu {
    order: number,
    width: number,
    navItemRect?: DOMRect,
}

type Props = {
    show: boolean
    menu: Menu
    height: number
    children: React.ReactNode
    navRef: RefObject<HTMLDivElement>,
    prevOrder: number,
    onMouseEnter: () => void
    onMouseLeave: () => void
}

const PADDING = 20 // px
const OFFSET_LEFT_STEP = 100; // px
const MIN_ARROW_GAP_LEFT = 100; // px

const Menu: React.FC<Props> = ({
    show,
    children,
    navRef,
    menu,
    height,
    prevOrder,
    onMouseEnter,
    onMouseLeave
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (show && prevOrder === 0) {
            ref.current?.classList.remove('duration-50', 'delay-100')
            setTimeout(() => {
                setOpacity(1)
                ref.current?.classList.add('transition-all', 'duration-300')
            }, 10)
        } else if (!show) {
            setOpacity(0)
            ref.current?.classList.remove('duration-300')
            ref.current?.classList.add('duration-50', 'delay-100')
            setTimeout(() => {
                ref.current?.classList.remove('transition-all')
            }, 10)
        }
    }, [show, prevOrder])


    useEffect(() => {
        if (navRef.current && menu.navItemRect) {
            const navItemRect = menu.navItemRect
            const menuItemMid = navItemRect.left + 0.5 * navItemRect.width
            const navLeft = navRef.current.getBoundingClientRect().left

            let left = navLeft;
            while (menuItemMid - (left + OFFSET_LEFT_STEP) > MIN_ARROW_GAP_LEFT)
                left += OFFSET_LEFT_STEP

            ref.current?.style.setProperty("--tw-translate-x", `${left}px`)
        }
    }, [menu])

    return (
        <div
            id="navMenu"
            ref={ref}
            className="relative transform"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                width: `${(menu?.width)}px`,
                height: `${height + PADDING}px`,
                top: `-${PADDING}px`,
                paddingTop: `${PADDING}px`,
                transformOrigin: 'top center',
                opacity
            }}
        >
            <div id="navMenuInner" className={classes("bg-secondary bg-opacity-25 overflow-hidden relative rounded-lg w-full h-full shadow-xl")}>
                {children}
            </div>
        </div>
    )
}

export default Menu