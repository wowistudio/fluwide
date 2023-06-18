import { HiArrowNarrowLeft, HiOutlineX } from "react-icons/hi";
import Logo from "../Logo";
import { classes } from "@/lib/utils";

interface Props {
    activeSubItem: number;
    setActiveSubItem: (order: number) => void
}

const Header: React.FC<Props> = ({ setActiveSubItem, activeSubItem }) => {
    const logoClass = classes(
        "left-0 transition duration-400 ease-out",
        activeSubItem > 0 && "-translate-x-full opacity-0"
    )

    const backClass = classes(
        "flex items-center p-4 cursor-pointer absolute left-0 transition duration-400 ease-out",
        activeSubItem === -1 && "translate-x-full opacity-0 cursor-none pointer-events-none"
    )

    return (
        <div className="relative p-4 leading-4 flex items-center">
            <HiOutlineX className="absolute right-4" />
            <Logo className={logoClass} />
            <div className={backClass} onClick={() => setActiveSubItem(-1)}>
                <HiArrowNarrowLeft className="mr-2" />
                <span>Back</span>
            </div>
        </div>
    )
};

export default Header;