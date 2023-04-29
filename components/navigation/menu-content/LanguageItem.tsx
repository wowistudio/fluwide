interface Props {
    logo: React.ReactElement
    text: string
    color?: string
}

const LanguageItem: React.FC<Props> = ({ logo, text, color }) => {
    return (
        <li className='flex items-center font-medium text-sm'>
            <span className={`w-4 ${color}`}>{logo}</span>
            <p className="pl-2">{text}</p>
        </li>
    )
}

export default LanguageItem