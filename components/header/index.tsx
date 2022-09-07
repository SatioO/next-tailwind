import { useRouter } from "next/router"
import Button from "../button"

const Header: React.FC<Props> = (props) => {
    const router = useRouter()

    return (
        <div className="shadow-xl">
            <div className="flex flex-1 items-center bg-gray-800 justify-between px-4">
                <div className="flex flex-shrink-0 items-center h-16 ">
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="IDP"
                    />
                </div>
                <Button title="Login" onClick={() => router.push("/login")} />
            </div>
        </div>
    )
}

type Props = {}

export default Header
