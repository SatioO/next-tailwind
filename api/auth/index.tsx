import { AxiosResponse } from "axios"
import fetcher from "../../lib/axios"
import { environment } from "../../lib/environment"
import { ITokenRequest, ITokenResponse } from "./auth.types"

export const login = (
    data: ITokenRequest
): Promise<AxiosResponse<ITokenResponse>> =>
    fetcher.post<ITokenResponse>(
        `/v1/realm/${environment.realm}/protocol/oidc/token`,
        data
    )
