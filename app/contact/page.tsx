'use client'

import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Contact } from "@/domains/contact/Contact";

export default function ContactPage() {
    return (
        <main className="flex justify-center items-center h-[calc(100dvh)]">
            <div>
                <Link href="/" className="flex items-center">
                    <HiArrowNarrowLeft className="mr-2" />
                    back to home
                </Link>

                <div className=" grid w-full gap-4 rounded-b-lg border bg-background p-6 sm:max-w-lg sm:rounded-lg mt-6">
                    <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                        <h2 className="text-lg font-semibold leading-none tracking-tight">👋 Hello</h2>
                        <p className="text-sm text-muted-foreground">Leave your email &amp; some content and we'll make it work.</p>
                    </div>

                    <Contact />
                </div>
            </div>
        </main>
    )
}
