import axios, { AxiosRequestConfig } from "axios"
import { getSession } from "next-auth/react"
import { v4 as uuidv4 } from "uuid"
import { environment } from "./environment"

const axiosClient = axios.create({
    baseURL: environment.base_url,
    headers: {
        GLOBALUUID: uuidv4(),
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 5000,
})

axiosClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const session = await getSession()

        if (config.headers) {
            config.headers["REQUESTUUID"] = uuidv4()
            if (session?.access_token)
                config.headers[
                    "Authorization"
                ] = `Bearer ${session.access_token}`
        }

        return config
    },
    (err) => Promise.reject(err)
)

export { axiosClient }
