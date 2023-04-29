import { useEffect, useMemo, useRef, useState } from "react"
import { Menu } from "./NavMenu"

type Props = {
    show: boolean
    menu: Menu
    prevOrder: number
}

const MenuArrow: React.FC<Props> = ({ menu, show, prevOrder }) => {
    const ref = useRef<HTMLDivElement>(null)
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (show && prevOrder === 0) {
            setTimeout(() => ref.current?.classList.remove('transition-all'), 20)
            setTimeout(() => {
                setOpacity(1)
                ref.current?.classList.add('transition-all', '-translate-y-[21px]')
            }, 50)
        } else if (!show) {
            ref.current?.classList.remove("delay-100")
            setOpacity(0)
            ref.current?.classList.remove('-translate-y-[21px]')
        }
    }, [show])

    useEffect(() => {
        const navItemRect = menu?.navItemRect
        const menuItemMid = navItemRect && navItemRect?.left + 0.5 * navItemRect?.width

        const width = ref?.current?.getBoundingClientRect().width || 0

        if (!menuItemMid || !width)
            return

        const left = menuItemMid - (0.5 * width)
        ref.current?.style.setProperty("--tw-translate-x", `${left}px`)
    }, [menu])

    return (
        <div
            ref={ref}
            className="absolute w-2 h-2 transform pointer-events-none bg-blue-100 bg-opacity-50 rounded-full shadow-xl"
            style={{ opacity }}
        />
    )
}

export default MenuArrow