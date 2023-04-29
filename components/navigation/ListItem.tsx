import { useRef } from "react"
import { MenuIdentifier } from "./Navigation"

interface Props {
    width: number
    order: number
    activeOrder: number
    children: React.ReactNode
    onMouseEnter: (middle: DOMRect | undefined, width: number, order: number) => void
    onMouseLeave: () => void
}

const ListItem: React.FC<Props> = ({
    children,
    activeOrder,
    onMouseEnter,
    onMouseLeave,
    width,
    order
}) => {
    const ref = useRef<HTMLLIElement>(null)

    const onMouseEnterInner = () => {
        const rect = ref?.current?.getBoundingClientRect()
        onMouseEnter(rect, width, order)
    }

    const onClick = () => {
        (activeOrder === order)
            ? onMouseLeave()
            : onMouseEnterInner()
    }

    const klass = [
        "py-3 px-6 text-sm list-item font-medium transition-opacity duration-300",
        activeOrder === order && 'opacity-25'
    ].join(' ')

    return (
        <li
            ref={ref}
            aria-haspopup="true"
            className={klass}
            onMouseEnter={onMouseEnterInner}
            onMouseLeave={onMouseLeave}
        >
            <button className="cursor-default" onClick={onClick}>
                {children}
            </button>
        </li>
    )
}

export default ListItem