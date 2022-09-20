export interface IClientResponse {
    data: IClientPayload[]
}

export interface IClientPayload {
    id: string
    name: string
    description: string
    client_id: string
    realm: string
    public_client: boolean
    protocol: string
    standard_flow_enabled: boolean
    direct_access_grants_enabled: boolean
    implicit_flow_enabled: boolean
    service_accounts_enabled: boolean
    client_authenticator_type: string
    redirect_uris: string
    enabled: boolean
}
