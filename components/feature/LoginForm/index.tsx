import { useFormik } from "formik"
import styles from "./loginform.module.css"
import { IUserInput, LoginFormProps } from "./loginform.types"

const LoginForm: React.FC<LoginFormProps> = (props) => {
    const formik = useFormik<IUserInput>({
        initialValues: { username: "", password: "" },
        onSubmit: props.onSubmit,
    })

    return (
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
                    <button className={styles.button}>Submitting</button>
                ) : (
                    <button className={styles.button} type="submit">
                        Login
                    </button>
                )}
            </div>
        </form>
    )
}

export default LoginForm
