import { HiOutlineCheckCircle } from "react-icons/hi"

interface Props {
    children: string
}

const ProjectListItem: React.FC<Props> = ({ children }) => {
    return (
        <li className='flex items-center mt-3 font-medium text-sm'>
            <span className="w-4"><HiOutlineCheckCircle /></span>
            <p className="pl-2">{children}</p>
        </li>
    )
}

export default ProjectListItem