import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface Props {
}

const MenuFoldFooter: React.FC<Props> = (props) => {
    const router = useRouter()

    return (
        <div className="relative p-4">
            <Button variant="secondary" onClick={() => router.push("/contact")}>contact</Button>
        </div>
    )
};

export default MenuFoldFooter;