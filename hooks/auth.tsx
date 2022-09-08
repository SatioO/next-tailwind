import { useMutation } from "react-query"
import { UserInput } from "../pages/login/login.type"
import { login } from "../services/auth"

const useLoginUser = () => {
    return useMutation(
        (data: UserInput) =>
            login({
                grant_type: "password",
                username: data.username,
                password: data.password,
                client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
                scope: "openid",
            }),
        {
            onSuccess(response) {
                const tokenResponse = response.data.data
                localStorage.setItem("access_token", tokenResponse.access_token)
                localStorage.setItem(
                    "refresh_token",
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
