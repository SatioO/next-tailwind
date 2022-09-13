import { AxiosResponse } from "axios"

export function getResult<T>(response: AxiosResponse<IQueryResult<T>>): T {
    return response.data.data as T
}

export interface IPageOptions {
    hasNextPage: boolean
    hasPreviousPage: boolean
    itemCount: number
    page: number
    pageCount: number
    take: number
}

export interface IQueryPayload<T> {
    items: T
    pageOptions: IPageOptions
}

export interface IQueryResult<T> {
    data: IQueryPayload<T>
}
