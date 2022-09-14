import { ReactNode } from "react"

export type TableProps<T> = {
    data: T
    columns: TableColumn[]
    progress?: boolean
    progressComponent?: ReactNode
    pagination?: PaginationProps
    onRowClick: (row: any) => void
}

export type TableColumn = {
    name: string
    selector: (row: any) => any
}

export type PaginationProps = {}

interface Employee {
    id: number
    name: string
}

function searchEmployeeBasedOnName(searchString: string, employees: Employee[]):Employee[] {
    return employees.filter(employee => {
      employee.name.toLowerCase().indexOf(searchString) > -1;
    });
  }