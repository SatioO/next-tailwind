import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../Button"
import styles from "./header.module.css"

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
    const router = useRouter()
    const session = useSession()

    async function onLogout() {
        await signOut({ redirect: false })
        router.replace("/login")
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <h4 className={styles.title}>Identify Management System</h4>
                </div>
                <div className={styles.nav}>
                    {session.status !== "authenticated" ? (
                        <Link href={"/login"}>
                            <Button title="Login" />
                        </Link>
                    ) : (
                        <Button title="Logout" onClick={onLogout} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
