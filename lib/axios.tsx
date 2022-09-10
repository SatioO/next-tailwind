import axios, { AxiosRequestConfig } from "axios"
import { getSession } from "next-auth/react"
import { v4 as uuidv4 } from "uuid"
import { environment } from "./environment"

const axiosClient = axios.create({
    baseURL: environment.idp_base_url,
    headers: {
        GLOBALUUID: uuidv4(),
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 5000,
    withCredentials: true,
})

axiosClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const session = await getSession()

        if (config.headers) {
            config.headers["REQUESTUUID"] = uuidv4()
            if (session?.access_token)
                config.headers["Authorization"] = session.access_token as string
        }

        return config
    },
    (err) => Promise.reject(err)
)

export default axiosClient
