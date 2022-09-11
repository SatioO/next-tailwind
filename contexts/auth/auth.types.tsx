import React from "react"
import { ITokenPayload } from "../../api/auth/auth.types"

export type AuthProps = {
    children: React.ReactNode
}

export interface IAuthContextType {
    isAuthenticated: boolean
    login: Login
    logout: Logout
}

export interface IUserInfo {
    firstName: string
    lastName: string
}

type Login = (tokenResponse: ITokenPayload) => void
type Logout = () => void
