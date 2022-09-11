import { login } from "@api/auth"
import { ITokenResponse } from "@api/auth/auth.types"
import { IUserInput } from "@components/feature/LoginForm/loginform.types"
import { GRANT_TYPE, SCOPES } from "@constants/auth.constant"
import { useAuth } from "@contexts/auth"
import { environment } from "@lib/environment"
import { getError, IErrorResponse } from "@lib/errors"
import { AxiosError, AxiosResponse } from "axios"
import { useMutation } from "react-query"

const useLoginUser = () => {
    const auth = useAuth()

    return useMutation(
        (data: IUserInput) =>
            login({
                grant_type: GRANT_TYPE,
                username: data.username,
                password: data.password,
                client_id: environment.client,
                scope: SCOPES,
            }),
        {
            onSuccess(response: AxiosResponse<ITokenResponse>) {
                auth.login(response.data.data)
            },
            onError(error: AxiosError<IErrorResponse>) {
                console.log(getError(error))
            },
        }
    )
}

export default useLoginUser
