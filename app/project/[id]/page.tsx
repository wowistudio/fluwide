import { PageProps } from "@/.next/types/app/page";
import Link from "next/link";
import {HiArrowNarrowLeft, HiExternalLink} from "react-icons/hi";
import {hobbyProjects} from "@/domains/hobbies/hobbies";

export default function ProjectPage(props: PageProps) {
    const projects = hobbyProjects.find((project) => project.id === props.params?.id)

    return (
        <main className="flex justify-center items-center h-[calc(100dvh)]">
            <div className="w-full sm:w-[400px]">
                <Link href="/" className="flex items-center">
                    <HiArrowNarrowLeft className="mr-2" />
                    back to home
                </Link>

                <div className="gap-4 border bg-background p-6 sm:max-w-lg rounded-lg mt-6 w-full md:min-w-[400px] min-h-[300px]">
                    <h1 className="font-bold">{projects?.title}</h1>
                    {projects?.id !== "jeroenlife" && <p>Coming soon</p>}
                    {projects?.id === "jeroenlife" && (
                        <a className="underline flex items-center gap-1 mt-4" href="https://jeroen.life">
                            <HiExternalLink size="1.2em" />
                            Go to website
                        </a>
                    )}
                </div>
            </div>
        </main>
    )
}
