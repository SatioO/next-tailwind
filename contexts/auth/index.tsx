import React, { ReactNode } from "react"
import { AuthContextType, IUserInfo } from "./auth.types"

export const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [userInfo, setUserInfo] = React.useState<IUserInfo | null>(null)

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!userInfo, userInfo }}>
            {children}
        </AuthContext.Provider>
    )
}

type Props = { children: ReactNode }
