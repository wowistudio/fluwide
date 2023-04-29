'use client';

import {
    SiTerraform,
    SiDjango,
    SiReact,
    SiPython,
    SiVuedotjs,
    SiDocker,
    SiKubernetes,
    SiAmazonaws,
    SiDigitalocean,
    SiNextdotjs,
    SiTypescript
} from 'react-icons/si';
import LanguageItem from './LanguageItem';

export default () => {
    return (
        <div className="text-sm relative">
            <div className="p-6">
                <p className='m-0 uppercase'>APPLICATION</p>
                <ul className='flex flex-wrap gap-4 mt-3'>
                    <LanguageItem logo={<SiTypescript />} text='typescript' color='text-[#3075C1]' />
                    <LanguageItem logo={<SiReact />} text='react' color='text-[#149ECA]' />
                    <LanguageItem logo={<SiNextdotjs />} text='next' />
                    <LanguageItem logo={<SiVuedotjs />} text='vue' color='text-[#3FB27F]' />
                    <LanguageItem logo={<SiPython />} text='python' color='text-[#F8CE4B]' />
                    <LanguageItem logo={<SiDjango />} text='django' color='text-[#0A2D1E]' />
                </ul>
            </div>

            <div className="bg-white dark:bg-gray-100 dark:bg-opacity-25 p-6 rounded shadow-gray-100">
                <p className='m-0 uppercase'>DEVOPS</p>
                <ul className='flex flex-wrap gap-4 mt-3'>
                    <LanguageItem logo={<SiTerraform />} text='terraform' color="text-[#8450BA]" />
                    <LanguageItem logo={<SiDocker />} text='docker' color='text-[#2392E7]' />
                    <LanguageItem logo={<SiKubernetes />} text='kubernetes' color='text-[#3169DF]' />
                    <LanguageItem logo={<SiAmazonaws />} text='aws' color='text-[#F49200]' />
                    <LanguageItem logo={<SiDigitalocean />} text='digitalocean' color='text-[#0064F4]' />
                </ul>
            </div>
        </div>
    )
}