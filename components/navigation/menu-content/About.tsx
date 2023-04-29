'use client';

import { Button } from "@/components/ui/button";
import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineMicrophone,
    HiOutlineLibrary,
    HiOutlineOfficeBuilding,
    HiOutlineDesktopComputer,
    HiDownload
} from "react-icons/hi";

export default () => {
    return (
        <div className="text-sm relative">
            <div className="absolute right-0 flex justify-end p-6">
                <Button onClick={() => console.log("DOWNLOAD")}>
                    <HiDownload />
                    <span className="ml-1">Download CV</span>
                </Button>
            </div>

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

            <div className="bg-white dark:bg-gray-100 dark:bg-opacity-25 p-6 rounded shadow-gray-100">
                <p className='m-0 uppercase'>EDUCATION</p>
                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineLibrary />
                    <p className="pl-2">Science, Business & Innovation (VU Amsterdam)</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineOfficeBuilding />
                    <p className="pl-2">Industrial Ecology (TU Delft)</p>
                </div>

                <div className='flex items-center mt-3 font-medium'>
                    <HiOutlineDesktopComputer />
                    <p className="pl-2" title="3">Full Stack Course (NYCDA)</p>
                </div>
            </div>
        </div>
    )
}