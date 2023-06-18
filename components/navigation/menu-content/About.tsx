'use client';

import { Button } from "@/components/ui/button";
import { classes } from "@/lib/utils";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineMicrophone,
    HiOutlineLibrary,
    HiOutlineOfficeBuilding,
    HiOutlineDesktopComputer,
    HiDownload
} from "react-icons/hi";

const About: React.FC<React.ComponentProps<"div">> = ({ className, ...props }) => {
    const klass = classes(className, "text-sm relative")
    return (
        <div className={klass} {...props}>
            <div className="p-6">
                <p className='m-0 uppercase'>BASICS</p>
                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineUser />
                    <p className="pl-2">Jeroen Huisman</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineHome />
                    <p className="pl-2">Amsterdam (NL)</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineMicrophone />
                    <p className="pl-2">Dutch, English</p>
                </div>

            </div>

            <div className="bg-primary dark:bg-gray-100 dark:bg-opacity-25 p-6 rounded shadow-gray-100">
                <p className='m-0 uppercase'>EDUCATION</p>
                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineLibrary />
                    <p className="pl-2">Science, Business & Innovation (VU&nbsp;Amsterdam)</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineOfficeBuilding />
                    <p className="pl-2">Industrial Ecology (TU&nbsp;Delft)</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineDesktopComputer />
                    <p className="pl-2" title="3">Full Stack Course (NYCDA)</p>
                </div>
            </div>

            <div className="lg:absolute right-0 top-0 lg:flex justify-end p-6">
                <Button onClick={() => console.log("DOWNLOAD")}>
                    <HiDownload />
                    <span className="ml-1">Download CV</span>
                </Button>
            </div>
        </div>
    )
}

export default About