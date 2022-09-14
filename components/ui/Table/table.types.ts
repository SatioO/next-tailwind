import { ReactNode } from "react"

export type TableProps<T> = {
    data: T
    columns: TableColumn[]
    progress?: boolean
    progressComponent?: ReactNode
    pagination?: PaginationProps
    onRowClick: (row: T) => void
}

export type TableColumn = {
    name: string
    selector: (row: any) => any
}

export type PaginationProps = {}
