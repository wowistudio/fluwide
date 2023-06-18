import { ArrayType } from "@/lib/typeUtils"
import { HiArrowRight, HiCalendar, HiMusicNote, HiTicket } from "react-icons/hi"

const projects = [
    {
        title: 'Disco Bingo',
        href: "#",
        subTitle: '[chat gpt generated] Get ready to groove and win with Disco Bingo! Say goodbye to numbers and immerse yourself in an energizing world of disco beats. Customize your playlist and mark your digital bingo card with songs of your choice. Feel the rhythm, embrace the funk, and let the music guide you to victory!',
        icon: HiMusicNote,
        // iconForeground: 'text-teal-700',
        // iconBackground: 'bg-teal-50',
    },
    {
        title: 'Tickettrap',
        href: "#",
        subTitle: "[chat gpt generated] Streamline ticket reservations with our user-friendly app! Seamlessly integrated with Ticketswap, securing your spot at sought-after events is a breeze. Say goodbye to tedious searches and hello to hassle-free bookings. Get ready to elevate your event experience with ease and convenience.",
        icon: HiTicket,
    },
    {
        title: 'Bdaylert',
        href: "#",
        subTitle: "[chat gpt generated] Never forget a birthday again with our Telegram-powered app! Seamlessly synced with Google Calendar, it's your ultimate personal reminder. Stay organized and effortlessly track important dates. Say goodbye to belated wishes and hello to timely celebrations with our intuitive birthday companion.",
        icon: HiCalendar
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Project: React.FC<ArrayType<typeof projects>> = ({ subTitle, title, href, icon: Icon }) => {
    return (
        <div className={classNames('relative border border-foreground p-6 rounded-lg')}>
            <div>
                <span
                    className={classNames(
                        // action.iconBackground,
                        // action.iconForeground,
                        'inline-flex rounded-lg p-3 ring-1 ring-foreground'
                    )}
                >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
            </div>
            <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-foreground">
                    <a href={href} className="focus:outline-none">
                        {/* Extend touch target to entire panel */}
                        <span className="absolute inset-0" aria-hidden="true" />
                        {title}
                    </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                    {subTitle || "Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae."}
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
    return (
        <div className="relative sm:grid sm:grid-cols-2 sm:gap-10 gap-4 pb-20">
            {projects.map((project, key) => <Project {...project} key={key} />)}
            <div className='absolute -top-20 pl-6 text-md'>
                Hobby projects
            </div>
        </div>
    )
}
