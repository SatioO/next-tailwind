const Login: React.FC<Props> = () => {
    return (
        <div className="h-screen flex flex-1 py-12 px-4 items-center justify-center">
            <div className="w-full max-w-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full  border border-gray-300 px-3 py-2 text-gray-900"
                                placeholder="Email address"
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
                            />
                        </div>
                    </div>
                    <div className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

type Props = {}

export default Login
