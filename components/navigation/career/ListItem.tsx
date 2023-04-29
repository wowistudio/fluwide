import { RefObject, useEffect, useRef, useState } from "react"
import { Identifier, TListItem } from "./Career"

interface Props {
    order: number
    listItem: TListItem
    children: React.ReactNode
    refCustom?: RefObject<HTMLLIElement>
    onMouseEnter: (middle: DOMRect | undefined, order: number) => void
}

const ListItem: React.FC<Props> = ({
    children,
    onMouseEnter,
    order,
    refCustom,
    listItem,
}) => {
    const refInner = useRef<HTMLLIElement>(null)
    const onMouseEnterInner = () => {
        const rect = (refCustom || refInner)?.current?.getBoundingClientRect()
        onMouseEnter(rect, order)
    }

    const klass = [
        "p-4 text-sm list-item transition-opacity",
        listItem.order === order ? "opacity-50" : "opacity-1"
    ].join(' ')

    return (
        <li
            ref={refCustom || refInner}
            className={klass}
            onMouseEnter={onMouseEnterInner}
        >
            {children}
        </li>
    )
}

export default ListItem