'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { useState } from "react"

// type Hello = Parameters<typeof Dialog>[0]
export default function ContactModal() {
    const [open, setOpen] = useState(true)
    const router = useRouter();

    const onOpenChange = (open: boolean) => {
        router.back()
        setOpen(open)
    }



    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>👋 Hello</DialogTitle>
                    <DialogDescription>
                        Leave your email & some content and we'll make it work.
                    </DialogDescription>
                </DialogHeader>

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

                <DialogFooter>
                    <Button type="submit" onClick={() => console.log("HELLo")}>Send</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
