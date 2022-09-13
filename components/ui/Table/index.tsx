import { TableProps } from "./table.types"

function Table<T extends any[] | []>({ data, columns }: TableProps<T>) {
    return (
        <div className="overflow-x-auto p-3 rounded-sm">
            <table className="table-fixed w-full text-sm text-gray-500 shadow-lg">
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
                <tbody className="text-sm divide-y divide-gray-100">
                    {data.map((row, rowIndex) => (
                        <tr
                            className={
                                rowIndex % 2 !== 0
                                    ? "bg-gray-50 hover:bg-stone-100"
                                    : "bg-white hover:bg-stone-100"
                            }
                            key={rowIndex}
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
        </div>
    )
}

export default Table
