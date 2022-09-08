import Link from "next/link"
import Button from "../button"

const Header: React.FC<Props> = () => {
    return (
        <div className="shadow-xl">
            <div className="flex flex-1 items-center bg-indigo-600 justify-between px-4">
                <div className="flex flex-shrink-0 items-center h-16 ">
                    <h2 className="text-white font-medium text-lg">
                        Identify Management
                    </h2>
                </div>
                <Link href={"/login"}>
                    <Button title="Login" />
                </Link>
            </div>
        </div>
    )
}

type Props = {}

export default Header
