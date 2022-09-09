export type AuthContextType = {
    isAuthenticated: boolean
    userInfo: IUserInfo | null
}

export interface IUserInfo {
    firstName: string
    lastName: string
}
