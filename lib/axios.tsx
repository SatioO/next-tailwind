import axios, { AxiosRequestConfig } from "axios"
import { v4 as uuidv4 } from "uuid"

const fetcher = axios.create({
    baseURL: process.env.NEXT_PUBLIC_IDP_BASE_URL,
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
