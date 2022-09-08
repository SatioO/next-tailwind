import { AxiosError } from "axios"

export const getError = (error: AxiosError<ServerError>): ErrorResponse => {
    if (error.isAxiosError && error.response && error.response)
        return error.response.data.error
    return {
        code: "WEB:GLOB:70001",
        description: "unexpected error",
        message: "internal_error",
    }
}

export type ErrorResponse = {
    code: string
    description: string
    message: string
}

export type ServerError = { error: ErrorResponse }
