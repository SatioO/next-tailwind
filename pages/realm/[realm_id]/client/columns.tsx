import { IClientPayload } from "@api/client/client.types"

export const columns = [
    {
        name: "ID",
        selector: (row: IClientPayload) => row.id,
    },
    {
        name: "Client ID",
        selector: (row: IClientPayload) => (
            <div className="font-medium">{row.client_id}</div>
        ),
    },
    {
        name: "Description",
        selector: (row: IClientPayload) => row.description,
    },
    {
        name: "Public Client",
        selector: (row: IClientPayload) => (
            <div className="capitalize">{String(row.public_client)}</div>
        ),
    },
    {
        name: "Status",
        selector: (row: IClientPayload) => (
            <div className="capitalize">{String(row.enabled)}</div>
        ),
    },
]
