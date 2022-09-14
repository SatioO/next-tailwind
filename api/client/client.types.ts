export interface IClientResponse {
    data: IClientPayload[]
}

export interface IClientPayload {
    id: string
    name: string
    client_id: string
    realm: string
    public_client: boolean
    enabled: boolean
}
