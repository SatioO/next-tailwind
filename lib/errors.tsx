import { AxiosError } from "axios"

export const getError = (error: AxiosError<IErrorResponse>): IErrorBody => {
    if (error.isAxiosError && error.response && error.response)
        return error.response.data.error
    return {
        code: "WEB:GLOB:70001",
        description: "unexpected error",
        message: "internal_error",
    }
}

export interface IErrorBody {
    code: string
    description: string
    message: string
}

export interface IErrorResponse {
    error: IErrorBody
}
