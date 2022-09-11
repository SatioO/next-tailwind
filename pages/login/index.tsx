import { useFormik } from "formik"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
import styles from "./login.module.css"
import { IUserInput, LoginProps } from "./login.types"

const Login: React.FC<LoginProps> = () => {
    const router = useRouter()
    const formik = useFormik<IUserInput>({
        initialValues: { username: "", password: "" },
        onSubmit: (values: IUserInput) => onLogin(values),
    })

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
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div>
                            <label htmlFor="username" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className={styles.input}
                                placeholder="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className={styles.input}
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        {formik.isSubmitting ? (
                            <button className={styles.button}>
                                Submitting
                            </button>
                        ) : (
                            <button className={styles.button} type="submit">
                                Login
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
