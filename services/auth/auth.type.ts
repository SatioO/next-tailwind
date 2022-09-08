export type UserLoginResponse = {
    data: TokenResponse
}

export type PasswordCredentials = {
    grant_type: string
    username: string
    password: string
    client_id: string | undefined
    scope: string
}

export type TokenResponse = {
    access_token: string
    expires_in: number
    id_token: string
    refresh_token: string
    scope: string
    token_type: string
}
