import LoginForm from "@components/feature/LoginForm"
import { IUserInput } from "@components/feature/LoginForm/loginform.types"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
import styles from "./login.module.css"
import { LoginProps } from "./login.types"

const Login: React.FC<LoginProps> = () => {
    const router = useRouter()

    async function onLogin(values: IUserInput) {
        const response = await signIn("credentials", {
            ...values,
            redirect: false,
        })

        if (response?.ok) router.replace("/")
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <h2 className={styles.heading}>Sign in to your account</h2>
                </div>
                <LoginForm onSubmit={onLogin} />
            </div>
        </div>
    )
}

export default Login
