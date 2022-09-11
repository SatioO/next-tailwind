import Cookies from "js-cookie"
import { useRouter } from "next/router"
import React from "react"
import { ITokenPayload } from "../../api/auth/auth.types"
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../../constants/storage.constant"
import { AuthProps, IAuthContextType } from "./auth.types"

export const AuthContext = React.createContext<IAuthContextType | null>(null)

export const AuthProvider: React.FC<AuthProps> = ({ children }) => {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false)

    function login(tokenResponse: ITokenPayload) {
        Cookies.set(ACCESS_TOKEN_KEY, tokenResponse.access_token, {
            expires: tokenResponse.expires_in,
            sameSite: "strict",
            secure: true,
        })
        Cookies.set(REFRESH_TOKEN_KEY, tokenResponse.refresh_token, {
            expires: tokenResponse.expires_in,
            sameSite: "strict",
            secure: true,
        })

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
