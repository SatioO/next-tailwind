import { IClientPayload } from "@api/client/client.types"

export const columns = [
    {
        name: "ID",
        selector: (row: IClientPayload) => row.id,
    },
    {
        name: "Name",
        selector: (row: IClientPayload) => (
            <div className="font-medium">{row.name}</div>
        ),
    },
    {
        name: "Client ID",
        selector: (row: IClientPayload) => row.client_id,
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
