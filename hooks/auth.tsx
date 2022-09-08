import { useMutation } from "react-query"
import { GRANT_TYPE, SCOPES } from "../constants/auth.constant"
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../constants/storage.constant"
import { UserInput } from "../pages/login/login.type"
import { login } from "../services/auth"

const useLoginUser = () => {
    return useMutation(
        (data: UserInput) =>
            login({
                grant_type: GRANT_TYPE,
                username: data.username,
                password: data.password,
                client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                scope: SCOPES,
            }),
        {
            onSuccess(response) {
                const tokenResponse = response.data.data
                localStorage.setItem(
                    ACCESS_TOKEN_KEY,
                    tokenResponse.access_token
                )
                localStorage.setItem(
                    REFRESH_TOKEN_KEY,
                    tokenResponse.refresh_token
                )
            },
            onError(error) {
                console.log(error)
            },
        }
    )
}

export default useLoginUser
