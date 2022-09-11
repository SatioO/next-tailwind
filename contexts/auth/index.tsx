import { ITokenPayload } from "@api/auth/auth.types"
import { useRouter } from "next/router"
import React from "react"
import { AuthProps, IAuthContextType } from "./auth.types"

export const AuthContext = React.createContext<IAuthContextType | null>(null)

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

    function login(tokenResponse: ITokenPayload) {
        setIsAuthenticated(true)
        router.replace("/")
    }

    function logout() {
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext) as IAuthContextType
