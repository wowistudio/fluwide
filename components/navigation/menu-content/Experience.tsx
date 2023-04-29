'use client';

import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineMicrophone,
    HiOutlineLibrary,
    HiOutlineOfficeBuilding,
    HiOutlineDesktopComputer
} from "react-icons/hi";

export default () => {
    return (
        <div className="text-sm">
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

            <div className="bg-gray-100 mt-4 p-6 rounded">
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
                    <p className="pl-2" title="New York & Design Ac">Full Stack Course (NYCDA)</p>
                </div>
            </div>
        </div>
    )
}