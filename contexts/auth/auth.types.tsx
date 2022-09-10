import React from "react"
import { ITokenResponse } from "../../api/auth/auth.types"

export interface IAuthProps {
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

type Login = (tokenResponse: ITokenResponse) => void
type Logout = () => void
