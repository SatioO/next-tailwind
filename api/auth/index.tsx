import fetcher from "../../lib/axios"
import { environment } from "../../lib/environment"
import { IPasswordCredentials, IUserLoginResponse } from "./auth.types"

export const login = (data: IPasswordCredentials) =>
    fetcher.post<IUserLoginResponse>(
        `/v1/realm/${environment.realm}/protocol/oidc/token`,
        data
    )
