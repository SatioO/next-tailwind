export type TableProps<T> = {
    data: T
    columns: TableColumn[]
    pagination?: PaginationProps
}

export type TableColumn = {
    title: string
    key: string
}

export type PaginationProps = {}
