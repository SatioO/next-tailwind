import { axiosClient } from "@lib/axios"
import { getResult, IQueryPayload } from "@lib/response"
import { IClientPayload } from "./client.types"

export const getClients = async (): Promise<
    IQueryPayload<IClientPayload[]>
> => {
    const response = await axiosClient.get("/v1/client")
    return getResult<IQueryPayload<IClientPayload[]>>(response)
}
