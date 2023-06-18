import { useState } from "react"
import MenuFolderHeader from "./Header";
import MenuFoldFooter from "./Footer";
import MenuFoldBody from "./Body";

export type MenuFoldoutProps = {
    showMenu: boolean
}

const MenuFoldoutTablet: React.FC<MenuFoldoutProps> = ({ showMenu }) => {
    const [activeSubItem, setActiveSubItem] = useState(-1);

    return (
        <div className='lg:hidden absolute right-0 top-0 p-6 w-full sm:w-3/4 md:w-1/2'>
            <div className="bg-card shadow-lg rounded-lg overflow-hidden border border-white">
                <MenuFolderHeader activeSubItem={activeSubItem} setActiveSubItem={setActiveSubItem} />
                <MenuFoldBody activeSubItem={activeSubItem} setActiveSubItem={setActiveSubItem} />
                <MenuFoldFooter />
            </div>
        </div>)
}


export default MenuFoldoutTablet