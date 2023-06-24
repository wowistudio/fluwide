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
    SiTypescript,
    SiNuxtdotjs
} from 'react-icons/si';
import LanguageItem from './LanguageItem';
import { FC } from 'react';
import { classes } from '@/lib/utils';
import { IconType } from 'react-icons';

type LanguageType = "application" | "operations"
type Language = "typescript" | "react" | "next" | "nuxt" | "vue" | "python" | "django" | "terraform" | "docker" | "aws" | "kubernetes" | "digitalocean"

export type TLanguageItem = {
    language: Language
    color: string
    icon: IconType
    type: LanguageType
}

export const languages: TLanguageItem[] = [
    {
        language: "typescript",
        color: "text-[#3075C1]",
        icon: SiTypescript,
        type: "application"
    }, {
        language: "react",
        color: "text-[#149ECA]",
        icon: SiReact,
        type: "application"
    }, {
        language: "next",
        color: "text-[#000000]",
        icon: SiNextdotjs,
        type: "application"
    }, {
        language: "nuxt",
        color: "text-[#73B7BD]",
        icon: SiNuxtdotjs,
        type: "application"
    }, {
        language: "vue",
        color: "text-[#3FB27F]",
        icon: SiVuedotjs,
        type: "application"
    }, {
        language: "python",
        color: "text-[#F8CE4B]",
        icon: SiPython,
        type: "application"
    }, {
        language: "django",
        color: "text-[#0A2D1E]",
        icon: SiDjango,
        type: "application"
    }, {
        language: "terraform",
        color: "text-[#8450BA]",
        icon: SiTerraform,
        type: "operations"
    }, {
        language: "docker",
        color: "text-[#2392E7]",
        icon: SiDocker,
        type: "operations"
    }, {
        language: "kubernetes",
        color: "text-[#3169DF]",
        icon: SiKubernetes,
        type: "operations"
    }, {
        language: "aws",
        color: "text-[#F49200]",
        icon: SiAmazonaws,
        type: "operations"
    }, {
        language: "digitalocean",
        color: "text-[#0064F4]",
        icon: SiDigitalocean,
        type: "operations"
    },
]

const Languages: FC<React.ComponentProps<"div">> = ({ className, ...props }) => {
    const klass = classes(className, "text-sm relative")
    const applicationLanguages = languages.filter(({ type }) => type === "application")
    const operationsLanguages = languages.filter(({ type }) => type === "operations")

    return (
        <div className={klass} {...props}>
            <div className="p-6">
                <p className='m-0 uppercase'>APPLICATION</p>
                <ul className='flex flex-wrap gap-4 mt-3'>
                    {applicationLanguages.map(lang => <LanguageItem key={lang.language} {...lang} />)}
                </ul>
            </div>

            <div className="bg-tertiary text-tertiary-foreground dark:bg-gray-100 dark:bg-opacity-25 p-6 rounded shadow-gray-100">
                <p className='m-0 uppercase'>OPERATIONS</p>
                <ul className='flex flex-wrap gap-4 mt-3'>
                    {operationsLanguages.map(lang => <LanguageItem key={lang.language} {...lang} />)}
                </ul>
            </div>
        </div>
    )
}

export default Languages