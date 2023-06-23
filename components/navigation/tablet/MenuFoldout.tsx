import { useState } from "react"
import MenuFolderHeader from "./Header";
import MenuFoldFooter from "./Footer";
import MenuFoldBody from "./Body";
import { classes } from "@/lib/utils";

export type MenuFoldoutProps = {
    showMenu: boolean;
    setShowMenu: (show: boolean) => void
}

const MenuFoldoutTablet: React.FC<MenuFoldoutProps> = ({ showMenu, setShowMenu }) => {
    const [activeSubItem, setActiveSubItem] = useState(-1);

    const onExit = () => {
        setShowMenu(false)
        setActiveSubItem(-1)
    }

    const maskClass = classes(
        "lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm w-full",
        !showMenu && "-translate-y-full"
    )

    const navClass = classes(
        'lg:hidden absolute right-0 z-50 top-0 p-4 lg:p-6 w-full sm:w-3/4 md:w-1/2',
        !showMenu && "-translate-y-full"
    )

    return (
        <>
            <div className={maskClass} />

            <div className={navClass}>
                <div className="bg-card shadow-lg rounded-lg overflow-hidden border border-border">
                    <MenuFolderHeader activeSubItem={activeSubItem} setActiveSubItem={setActiveSubItem} onExit={onExit} />
                    <MenuFoldBody activeSubItem={activeSubItem} setActiveSubItem={setActiveSubItem} />
                    <MenuFoldFooter />
                </div>
            </div>
        </>
    )
}


export default MenuFoldoutTablet