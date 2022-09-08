import { useFormik } from "formik"
import { useRouter } from "next/router"
import React from "react"
import useLoginUser from "../../hooks/auth"
import { UserInput } from "./login.type"

const Login: React.FC<Props> = () => {
    const router = useRouter()
    const formik = useFormik({
        initialValues: { username: "", password: "" },
        onSubmit: (values: UserInput) => onLogin(values),
    })
    const loginUser = useLoginUser()

    React.useEffect(() => {
        if (loginUser.isSuccess) router.replace("/")
    }, [loginUser.isSuccess, router])

    function onLogin(values: UserInput) {
        loginUser.mutate(values)
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
                            {loginUser.isLoading ? "Submitting" : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

type Props = {}

export default Login
