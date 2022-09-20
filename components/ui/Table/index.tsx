import { TableItem, TableProps } from "./table.types"

function Table<T extends TableItem>({
    data,
    columns,
    progress,
    onRowClick,
}: TableProps<T>) {
    return (
        <div className="overflow-x-auto rounded-sm bg-white shadow-lg">
            <table className="table-auto text-sm w-full text-gray-700">
                <thead className="text-slate-800 font-bold bg-white border-b-2">
                    <tr>
                        {columns.map((column) => {
                            return (
                                <th
                                    key={column.name}
                                    className="py-3 font-semibold px-6 text-left"
                                >
                                    {column.name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <tr
                            className={
                                rowIndex % 2 !== 0
                                    ? "bg-gray-50 hover:bg-stone-100"
                                    : "bg-white hover:bg-stone-100"
                            }
                            key={row.id}
                            onClick={() => onRowClick(row)}
                        >
                            {columns.map((column, colIndex) => {
                                return (
                                    <td
                                        className="py-3 px-6 cursor-pointer"
                                        key={`${rowIndex}:${colIndex}`}
                                    >
                                        {column.selector(row)}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {progress && (
                <div className="flex justify-center text-gray-500 p-4 text-sm">
                    loading...
                </div>
            )}
        </div>
    )
}

Table.defaultProps = {
    onRowClick: () => {},
}

export default Table
