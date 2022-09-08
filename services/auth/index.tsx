import fetcher from "../../lib/axios"
import { PasswordCredentials, UserLoginResponse } from "./auth.type"

export const login = (data: PasswordCredentials) => {
    return fetcher.post<UserLoginResponse>(
        `/v1/realm/${process.env.NEXT_PUBLIC_REALM_ID}/protocol/oidc/token`,
        data
    )
}
