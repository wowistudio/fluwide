import { useEffect, useRef } from "react"
import { TListItem } from "./Career"

type Props = {
    item: TListItem
    show: boolean
    containerTop?: number
    prevOrder: number
}

const Pointer: React.FC<Props> = ({ item, show, containerTop, prevOrder }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const rect = item?.careerItemRect
        const menuItemMid = rect && rect?.top + 0.5 * rect?.height

        const height = ref?.current?.getBoundingClientRect().height || 0

        if (!menuItemMid || !height || !containerTop)
            return

        const top = menuItemMid - containerTop - (0.5 * height)
        ref.current?.style.setProperty("--tw-translate-y", `${top}px`)
    }, [item])

    return (
        <div
            ref={ref}
            className="w-2 h-2 transform pointer-events-none bg-gray-500 rounded-full left-1/2 transition-all duration-300"
        />
    )
}

export default Pointer