import {HiCalendar, HiMusicNote, HiTicket} from "react-icons/hi";
import {TbWorldWww} from "react-icons/all";

export const hobbyProjects = [
    {
        id: "disco-bingo",
        title: 'Disco Bingo',
        subTitle: '[chat gpt generated] Get ready to groove and win with Disco Bingo! Say goodbye to numbers and immerse yourself in an energizing world of disco beats. Customize your playlist and mark your digital bingo card with songs of your choice. Feel the rhythm, embrace the funk, and let the music guide you to victory!',
        icon: HiMusicNote,
    },
    {
        id: "tickettrap",
        title: 'Tickettrap',
        subTitle: "[chat gpt generated] Streamline ticket reservations with our user-friendly app! Seamlessly integrated with Ticketswap, securing your spot at sought-after events is a breeze. Say goodbye to tedious searches and hello to hassle-free bookings. Get ready to elevate your event experience with ease and convenience.",
        icon: HiTicket,
    },
    {
        id: "bdaylert",
        title: 'Bdaylert',
        subTitle: "[chat gpt generated] Never forget a birthday again with our Telegram-powered app! Seamlessly synced with Google Calendar, it's your ultimate personal reminder. Stay organized and effortlessly track important dates. Say goodbye to belated wishes and hello to timely celebrations with our intuitive birthday companion.",
        icon: HiCalendar
    },
    {
        id: "jeroenlife",
        title: 'Jeroen.life',
        subTitle: "[chat gpt generated] Embark on a dynamic journey through my personal hobby haven – an electrifying oasis despite its vintage charm. This older iteration of my website pulsates with the raw essence of my personal passions, a digital time capsule exuding an unmistakable, timeless energy.",
        icon: TbWorldWww
    },
] as const