export type TableProps<T> = {
    data: T
    columns: TableColumn[]
    pagination?: PaginationProps
}

export type TableColumn = {
    name: string
    selector: (row: any) => any
}

export type PaginationProps = {}
