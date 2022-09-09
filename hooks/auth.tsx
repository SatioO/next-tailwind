import { AxiosError, AxiosResponse } from "axios"
import Cookies from "js-cookie"
import { useMutation } from "react-query"
import { login } from "../api/auth"
import { IUserLoginResponse } from "../api/auth/auth.types"
import { GRANT_TYPE, SCOPES } from "../constants/auth.constant"
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../constants/storage.constant"
import { environment } from "../lib/environment"
import { getError, IErrorResponse } from "../lib/errors"
import { UserInputType } from "../pages/login/login.types"

const useLoginUser = () => {
    return useMutation(
        (data: UserInputType) =>
            login({
                grant_type: GRANT_TYPE,
                username: data.username,
                password: data.password,
                client_id: environment.client,
                scope: SCOPES,
            }),
        {
            onSuccess(response: AxiosResponse<IUserLoginResponse>) {
                const tokenResponse = response.data.data
                Cookies.set(ACCESS_TOKEN_KEY, tokenResponse.access_token, {
                    expires: tokenResponse.expires_in,
                    secure: true,
                    sameSite: "strict",
                })
                Cookies.set(REFRESH_TOKEN_KEY, tokenResponse.refresh_token, {
                    expires: tokenResponse.expires_in,
                    secure: true,
                    sameSite: "strict",
                })
            },
            onError(error: AxiosError<IErrorResponse>) {
                console.log(getError(error))
            },
        }
    )
}

export default useLoginUser
