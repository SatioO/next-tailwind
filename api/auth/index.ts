import { axiosClient } from "@lib/axios"
import { environment } from "@lib/environment"
import { AxiosResponse } from "axios"
import { ITokenRequest, ITokenResponse } from "./auth.types"

export const authenticate = (
    data: ITokenRequest
): Promise<AxiosResponse<ITokenResponse>> =>
    axiosClient.post<ITokenResponse>(
        `/v1/realm/${environment.realm}/protocol/oidc/token`,
        data
    )
