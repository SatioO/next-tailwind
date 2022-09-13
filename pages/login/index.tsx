import LoginForm from "@components/feature/LoginForm"
import { IUserInput } from "@components/feature/LoginForm/loginform.types"
import { signIn } from "next-auth/react"
import React from "react"
import styles from "./login.module.css"
import { LoginProps } from "./login.types"

const LoginPage: React.FC<LoginProps> = () => {
    async function onLogin(values: IUserInput) {
        const url = new URL(location.href)
        const callbackUrl = url.searchParams.get("callbackUrl") || "/dashboard"

        await signIn("credentials", {
            ...values,
            callbackUrl,
        })
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

export default LoginPage
