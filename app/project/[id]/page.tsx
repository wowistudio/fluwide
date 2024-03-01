import { PageProps } from "@/.next/types/app/page";
import { hobbyProjects } from "@/app/(home)/projects";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function ProjectPage(props: PageProps) {
    const projects = hobbyProjects.find((project) => project.id === props.params?.id)

    return (
        <main className="flex justify-center items-center h-[calc(100dvh)]">
            <div>
                <Link href="/" className="flex items-center">
                    <HiArrowNarrowLeft className="mr-2" />
                    back to home
                </Link>

                <div className="w-full gap-4 rounded-b-lg border bg-background p-6 sm:max-w-lg sm:rounded-lg mt-6 min-w-[400px] min-h-[300px]">
                    <h1 className="font-bold">{projects?.title}</h1>
                    <p>Coming soon</p>
                </div>
            </div>
        </main>
    )
}
