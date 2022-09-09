export interface IUserLoginResponse {
    data: ITokenResponse
}

export interface IPasswordCredentials {
    grant_type: string
    username: string
    password: string
    client_id: string | undefined
    scope: string
}

export type ITokenResponse = {
    access_token: string
    expires_in: number
    id_token: string
    refresh_token: string
    scope: string
    token_type: string
}
