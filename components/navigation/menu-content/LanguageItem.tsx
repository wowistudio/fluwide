import { TLanguageItem } from "./Languages"


const LanguageItem: React.FC<TLanguageItem> = ({ icon: Icon, language, color }) => {
    return (
        <li className='flex items-center font-medium text-sm'>
            <span className={`w-4 ${color}`}><Icon /></span>
            <p className="pl-2">{language}</p>
        </li>
    )
}

export default LanguageItem