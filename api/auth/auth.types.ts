export interface ITokenResponse {
    data: ITokenPayload
}

export interface ITokenRequest {
    grant_type: string
    username: string
    password: string
    client_id: string | undefined
    scope: string
}

export interface ITokenPayload {
    access_token: string
    expires_in: number
    id_token: string
    refresh_token: string
    scope: string
    token_type: string
}
