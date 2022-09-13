import { TableProps } from "./table.types"

function Table<T extends any[] | []>({ data, columns }: TableProps<T>) {
    return (
        <table className="w-full  text-sm text-left text-gray-500 shadow-xl">
            <thead className="text-xs text-white uppercase bg-gray-500">
                <tr>
                    {columns.map((column) => {
                        return (
                            <th
                                key={column.key}
                                scope="col"
                                className="py-5 px-6"
                            >
                                {column.title}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, rowIndex) => (
                    <tr className="border-b bg-white" key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <td
                                className="py-5 px-6"
                                key={`${rowIndex}:${colIndex}`}
                            >
                                {String(item[column.key])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
