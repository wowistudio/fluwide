'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Contact() {
    return (
        <main className="flex justify-center items-center h-screen">
            <div>
                <Link href="/" className="flex items-center">
                    <HiArrowNarrowLeft className="mr-2" />
                    back to home
                </Link>

                <div className="bg-secondary grid w-full gap-4 rounded-b-lg border bg-background p-6 sm:max-w-lg sm:rounded-lg mt-6">
                    <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                        <h2 className="text-lg font-semibold leading-none tracking-tight">👋 Hello</h2>
                        <p className="text-sm text-muted-foreground">Leave your email &amp; some content and we'll make it work.</p>
                    </div>

                    <div className="grid gap-4 py-4">
                        <div>
                            <Label htmlFor="email">
                                E-mail
                            </Label>
                            <Input id="email" placeholder="henkdegroot@xs4all.nl" className="mt-2" data-1p-ignore />
                        </div>

                        <div>
                            <Label htmlFor="content" className="text-right">
                                Content
                            </Label>
                            <Textarea placeholder="Tell me all about it." className="mt-2" />
                        </div>
                    </div>

                    <div className="text-right">
                        <Button type="submit" onClick={() => console.log("HELLo")}>Send</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
