import { useRouter } from "next/router"
import Button from "../button"

const Header: React.FC<Props> = (props) => {
    const router = useRouter()

    return (
        <div className="shadow-xl">
            <div className="flex flex-1 items-center bg-indigo-600 justify-between px-4">
                <div className="flex flex-shrink-0 items-center h-16 ">
                    <h2 className="text-white font-medium text-lg">
                        Identify Management
                    </h2>
                </div>
                <Button title="Login" onClick={() => router.push("/login")} />
            </div>
        </div>
    )
}

type Props = {}

export default Header
