'use client';

import { ArrayType } from "@/lib/typeUtils"
import Link from "next/link"
import { HiArrowRight} from "react-icons/hi"
import {FaArrowDown} from "react-icons/all";
import {hobbyProjects} from "@/domains/hobbies/hobbies";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Project: React.FC<ArrayType<typeof hobbyProjects>> = ({ id, subTitle, title, icon: Icon }) => {
    const projectHref = `/project/${id}`

    return (
        <div className={classNames('relative border border-foreground p-6 rounded-lg')}>
            <div className="inline-flex rounded-lg p-3 ring-1 ring-foreground">
                <Icon className="h-6 w-6" aria-hidden="true" />
            </div>

            <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-foreground">
                    <Link href={projectHref} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                    </Link>
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                    {subTitle}
                </p>
            </div>

            <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
            >
                <HiArrowRight className="fill-foreground" />
            </span>
        </div >
    )
}

export default function Projects() {
    const scrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }

    return (
        <div className="relative grid sm:grid-cols-2 sm:gap-10 gap-4 pb-20">
            <div
                className="absolute -top-20 pl-6 text-md flex items-center gap-2 cursor-pointer"
                onClick={() => scrollDown()}
            >
                Hobby projects
                <FaArrowDown />
            </div>
            {hobbyProjects.map((project, key) => <Project {...project} key={key} />)}
        </div>
    )
}
