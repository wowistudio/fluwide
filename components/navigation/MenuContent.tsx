import { useEffect, useMemo, useRef } from "react"
import { MenuAnimationDirection } from "./Navigation"
import { Menu } from "./NavMenu"

type BgClass = "bg-blue-100" | "bg-gray-100" | "white"

interface Props {
    menu: Menu
    order: number
    width: number
    children: React.ReactNode
    animationDirection: MenuAnimationDirection
    setMenuHeight: React.Dispatch<React.SetStateAction<number>>
    background?: BgClass
}

const MenuContent: React.FC<Props> = ({
    children,
    width,
    animationDirection,
    menu,
    order,
    setMenuHeight,
    background = "white"
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const innerRef = useRef<HTMLElement>(null)
    const show = useMemo(() => order === menu.order, [menu])
    const transitionCls = useMemo(() => {
        if (animationDirection === "down")
            return "no-translate"

        const toRight = animationDirection === "right"
        const toLeft = animationDirection === "left"
        if (toRight && order > menu.order || toLeft && order > menu.order)
            return "translate-x-1/2"

        return "-translate-x-1/2"
    }, [animationDirection, show])

    const height = useMemo(() => {
        return innerRef.current?.getBoundingClientRect().height || 0
    }, [innerRef?.current])

    useEffect(() => {
        ref.current?.classList.forEach(cls => cls.includes("translate") && ref.current?.classList.remove(cls))
        if (show)
            setMenuHeight(height)
        else
            ref.current?.classList.add(transitionCls)
    }, [animationDirection, show])

    const klass = [
        "absolute duration-300 absolute ease-in-out",
        show ? "opacity-1" : "opacity-[0] pointer-events-none",
    ].filter(Boolean).join(' ')

    return (
        <div
            ref={ref}
            style={{ width, height }}
            className={klass}
        >
            <section ref={innerRef} className={`p-2`}>
                {children}
            </section>
        </div>
    )
}

export default MenuContent