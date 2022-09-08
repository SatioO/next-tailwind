import fetcher from "../../lib/axios"
import { environment } from "../../lib/environment"
import { PasswordCredentials, UserLoginResponse } from "./auth.type"

export const login = (data: PasswordCredentials) => {
    return fetcher.post<UserLoginResponse>(
        `/v1/realm/${environment.realm}/protocol/oidc/token`,
        data
    )
}
