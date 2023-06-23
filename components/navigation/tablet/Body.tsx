import { ReactNode, useEffect, useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { careerItems, navItems } from "../content";
import { ArrayType } from "@/lib/typeUtils"
import { classes } from "@/lib/utils";
import Languages from "../menu-content/Languages";
import { CareerContent } from "../career/Career";
import About from "../menu-content/About";

interface MenuFoldBodyProps {
    activeSubItem: number;
    setActiveSubItem: (order: number) => void
}


type MenuListItemProps = ArrayType<typeof navItems> & {
    onClickSubItem: (index: number) => void
}

type MenuSubItemProps = {
    children: ReactNode,
    order: number,
    activeSubItem: number,
    setMenuHeight: (height: number) => void
}

const MenuListItem: React.FC<MenuListItemProps> = ({ onClickSubItem, ...item }) => {
    if (!item.subItems)
        return (
            <li onClick={() => onClickSubItem(item.order)}>
                <button className="w-full flex justify-between items-center py-6 px-4">
                    <span className="capitalize">{item.title}</span>
                    <div className="text-[18px]">
                        <HiChevronRight />
                    </div>
                </button>
            </li>
        )

    return (
        <li className="bg-secondary">
            <div className="flex justify-between items-center p-4">
                <span className="capitalize">{item.title}</span>
            </div>

            {item.subItems.map((subItem, key) => (
                <div
                    key={key}
                    className="flex justify-between items-center p-4 text-sm cursor-pointer"
                    onClick={() => onClickSubItem(Number(`${item.order}${key + 1}`))}
                >
                    <div>
                        <span className="capitalize block font-semibold">{subItem.title}</span>
                        <span className="capitalize">{subItem.subTitle}</span>
                    </div>

                    <div className="text-[18px]">
                        <HiChevronRight />
                    </div>
                </div>
            ))}
        </li>
    )
};

const MenuSubItem: React.FC<MenuSubItemProps> = ({ setMenuHeight, activeSubItem, order, children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const klass = classes(
        "absolute transition duration-400 right-0 top-0 translate-x-[100%]",
        (activeSubItem === order) ? "opacity-1" : "opacity-0 "
    )

    useEffect(() => {
        setMenuHeight(ref.current?.getBoundingClientRect().height || 0)
    }, [ref.current])

    return (
        <div ref={ref} className={klass}>
            {children}
        </div>
    )
};

const MenuFoldBody: React.FC<MenuFoldBodyProps> = ({ setActiveSubItem, activeSubItem }) => {
    const uListref = useRef<HTMLUListElement>(null);
    const ref = useRef<HTMLDivElement>(null);
    // const [menuHeight, setMenuHeight] = useState(0);

    useEffect(() => {
        onSubItemRender(ref.current?.getBoundingClientRect().height || 0)
    }, [ref.current])

    const onClickSubItem = (order: number) => {
        setActiveSubItem(order)
    }

    const onSubItemRender = (height: number) => {
        // if (height > menuHeight)
        //     setMenuHeight(height)
    }

    const klass = classes(
        "transition duration-400 ease-out",
        activeSubItem > 0 && "-translate-x-full"
    )
    return (
        <div
            className="relative"
        // style={{ height: `${menuHeight}px` }}
        >
            <div
                ref={ref}
                className={klass}
            >
                <ul ref={uListref}>
                    {navItems.map((item, key) => (
                        <MenuListItem
                            key={key}
                            onClickSubItem={onClickSubItem}
                            {...item}
                        />
                    ))}
                </ul>

                {careerItems.map((item, key) => (
                    <MenuSubItem key={key} setMenuHeight={onSubItemRender} order={Number(`1${key + 1}`)} activeSubItem={activeSubItem}>
                        <CareerContent item={item} className="p-4" />
                    </MenuSubItem>
                ))}

                <MenuSubItem setMenuHeight={onSubItemRender} order={2} activeSubItem={activeSubItem}>
                    <About />
                </MenuSubItem>

                <MenuSubItem setMenuHeight={onSubItemRender} order={3} activeSubItem={activeSubItem}>
                    <Languages />
                </MenuSubItem>
            </div>
        </div>
    )
};

export default MenuFoldBody;