import { useFormik } from "formik"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import React from "react"
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

        if (response?.ok) router.push("/")
    }

    return (
        <div className="h-screen flex flex-1 py-12 px-4 items-center justify-center">
            <div className="w-full max-w-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm">
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
                                className="relative block w-full  border border-gray-300 px-3 py-2 text-gray-900"
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
                                className="relative block w-full  border border-gray-300 px-3 py-2 text-gray-900"
                                placeholder="Password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
