import { ITokenPayload } from "@api/auth/auth.types"
import React from "react"

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
