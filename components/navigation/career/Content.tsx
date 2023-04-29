import { useEffect, useMemo, useRef } from "react"
import { AnimationDirection } from "./Career"
import { TListItem } from "./Career"

interface Props {
    listItem: TListItem
    order: number
    children: React.ReactNode
    animationDirection: AnimationDirection
}

const Content: React.FC<Props> = ({ children, animationDirection, listItem, order }) => {
    const ref = useRef<HTMLDivElement>(null)
    const show = useMemo(() => order === listItem.order, [listItem])
    const transitionCls = useMemo(() => (order < listItem.order) ? "-translate-y-[50px]" : "translate-y-[50px]", [animationDirection, show])

    useEffect(() => {
        ref.current?.classList.forEach(cls => cls.includes("translate") && ref.current?.classList.remove(cls))
        !show && ref.current?.classList.add(transitionCls)
    }, [animationDirection, show])

    const klass = [
        "absolute duration-300 absolute ease-in-out w-full padding-[inherit] h-full p-12",
        show ? "opacity-1" : "opacity-[0]"
    ].filter(Boolean).join(' ')

    return (
        <section ref={ref} className={klass}>
            {children}
        </section>
    )
}

export default Content