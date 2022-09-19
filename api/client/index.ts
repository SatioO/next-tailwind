import { axiosClient } from "@lib/axios"
import { getResult } from "@lib/response"
import { IClientPayload } from "./client.types"

export const getClientsByRealm = async (
    realm: string
): Promise<IClientPayload[]> => {
    const response = await axiosClient.get(`/v1/realm/${realm}/client`)
    return getResult<IClientPayload[]>(response)
}

export const getClientById = async (
    realmId: string,
    clientId: string
): Promise<IClientPayload> => {
    const response = await axiosClient.get(`/v1/client/${clientId}`, {
        headers: { realm: realmId },
    })
    return getResult<IClientPayload>(response)
}
