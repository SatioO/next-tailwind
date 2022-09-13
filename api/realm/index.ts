import { axiosClient } from "@lib/axios"
import { getResult, IQueryPayload } from "@lib/response"
import { IRealmPayload } from "./realm.types"

export const getRealms = async (): Promise<IQueryPayload<IRealmPayload[]>> => {
    const response = await axiosClient.get("/v1/realm?order=ASC")
    return getResult<IQueryPayload<IRealmPayload[]>>(response)
}
