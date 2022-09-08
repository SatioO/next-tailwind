import { AxiosError, AxiosResponse } from "axios"
import { useMutation } from "react-query"
import { login } from "../api/auth"
import { GRANT_TYPE, SCOPES } from "../constants/auth.constant"
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../constants/storage.constant"
import { environment } from "../lib/environment"
import { getError, ServerError } from "../lib/errors"
import { UserInput } from "../pages/login/login.type"

const useLoginUser = () => {
    return useMutation(
        (data: UserInput) =>
            login({
                grant_type: GRANT_TYPE,
                username: data.username,
                password: data.password,
                client_id: environment.client,
                scope: SCOPES,
            }),
        {
            onSuccess(response: AxiosResponse) {
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
            onError(error: AxiosError<ServerError>) {
                console.log(getError(error))
            },
        }
    )
}

export default useLoginUser
