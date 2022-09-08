import axios, { AxiosRequestConfig } from "axios"
import { v4 as uuidv4 } from "uuid"
import { environment } from "./environment"

const fetcher = axios.create({
    baseURL: environment.idp_base_url,
    headers: { GLOBALUUID: uuidv4() },
})

fetcher.interceptors.request.use(
    (req: AxiosRequestConfig) => {
        if (req.headers) req.headers["REQUESTUUID"] = uuidv4()
        return req
    },
    (err) => Promise.reject(err)
)

export default fetcher
