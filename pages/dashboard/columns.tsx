import { IRealmPayload } from "@api/realm/realm.types"

export const columns = [
    {
        name: "Name",
        selector: (row: IRealmPayload) => row.name,
    },
    {
        name: "Display Name",
        selector: (row: IRealmPayload) => row.display_name,
    },
    {
        name: "Logo",
        selector: (row: IRealmPayload) => row.logo || "Not configured",
    },
    {
        name: "Support Email",
        selector: (row: IRealmPayload) => row.support_email || "Not configured",
    },
    {
        name: "Support URL",
        selector: (row: IRealmPayload) => row.support_email || "Not configured",
    },
    {
        name: "Status",
        selector: (row: IRealmPayload) => (
            <div className="capitalize">{String(row.enabled)}</div>
        ),
    },
]
