import { HiArrowNarrowLeft, HiOutlineX } from "react-icons/hi";
import Logo from "../Logo";
import { classes } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
    activeSubItem: number;
    setActiveSubItem: (order: number) => void
    onExit: () => void
}

const Header: React.FC<Props> = ({ setActiveSubItem, activeSubItem, onExit }) => {
    const logoClass = classes(
        "left-0 transition duration-150 ease-out",
        activeSubItem > 0 && "-translate-x-full opacity-0"
    )

    const backClass = classes(
        "flex items-center p-4 cursor-pointer absolute left-0 transition duration-400 ease-out py-0 left-1",
        activeSubItem === -1 && "translate-x-full opacity-0 cursor-none pointer-events-none"
    )

    return (
        <div className="relative p-4 py-6 leading-4 flex items-center">
            <Button variant="ghost" onClick={onExit} className="absolute right-4 cursor-pointer" >
                <HiOutlineX height="1.2em" width="1.2em" />
            </Button>

            <Logo className={logoClass} />
            <Button variant="ghost" className={backClass} onClick={() => setActiveSubItem(-1)}>
                <HiArrowNarrowLeft className="mr-2" />
                <span>Back</span>
            </Button>
        </div>
    )
};

export default Header;