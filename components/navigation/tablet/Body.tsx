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
    activeSubItem: number,
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

const MenuSubItemContent: React.FC<Omit<MenuSubItemProps, "setMenuHeight"> & { order: number }> = ({ activeSubItem, children, order }) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (activeSubItem < 0) {
            ref.current?.classList.remove('visible')
            setTimeout(() => ref.current?.classList.add('invisible'), 400)
        } else if (activeSubItem === order) {
            ref.current?.classList.remove('invisible')
            setTimeout(() => ref.current?.classList.add('visible'), 0)
        }
    }, [order, activeSubItem])

    const klass = classes(
        "absolute top-0 transition duration-400 ease-in-out bg-card h-full w-full",
        activeSubItem === order ? "-translate-x-1/2" : ""
    )

    return <div ref={ref} className={klass}>{children}</div>
}

const MenuSubItem: React.FC<MenuSubItemProps> = ({ activeSubItem, children }) => {
    const klass = classes(
        "w-full relative transition-400",
        activeSubItem > -1 ? "visible" : "visible"
    )

    return <div className={klass}>{children}</div>
};

const MenuFoldBody: React.FC<MenuFoldBodyProps> = ({ setActiveSubItem, activeSubItem }) => {
    const uListref = useRef<HTMLUListElement>(null);

    const klass = classes(
        "relative flex transition duration-600 ease-out w-[200%]",
        activeSubItem > 0 && "-translate-x-[25%]"
    )

    return (
        <div className={klass}>
            <ul ref={uListref} className="w-full">
                {navItems.map((item, key) => (
                    <MenuListItem
                        key={key}
                        onClickSubItem={setActiveSubItem}
                        {...item}
                    />
                ))}
            </ul>

            <MenuSubItem activeSubItem={activeSubItem}>
                {careerItems.map((item, key) => (
                    <MenuSubItemContent key={key} activeSubItem={activeSubItem} order={Number(`1${key + 1}`)}>
                        <CareerContent item={item} className="p-4" />
                    </MenuSubItemContent>
                ))}

                <MenuSubItemContent activeSubItem={activeSubItem} order={2}>
                    <About />
                </MenuSubItemContent>

                <MenuSubItemContent activeSubItem={activeSubItem} order={3}>
                    <Languages />
                </MenuSubItemContent>
            </MenuSubItem>
        </div>
    )
};

export default MenuFoldBody;