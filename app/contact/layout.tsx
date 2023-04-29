import '../globals.css'

type ContactLayoutProps = {
    children: React.ReactNode;
}

export const metadata = {
    title: 'fluwide - contact',
    description: 'It\'s me',
}

export default function ContactLayout(props: ContactLayoutProps) {
    return (
        <>
            {props.children}
        </>
    )
}
