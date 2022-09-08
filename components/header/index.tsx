import Link from "next/link"
import Button from "../Button"
import styles from "./header.module.css"

const Header: React.FC<Props> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logoContainer}>
                    <h4 className={styles.title}>Identify Management System</h4>
                </div>
                <div className={styles.nav}>
                    <Link href={"/login"}>
                        <Button title="Login" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

type Props = {}

export default Header
