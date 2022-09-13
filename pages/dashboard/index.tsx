import Table from "@components/ui/Table"
import useClient from "@hooks/client/useClient"
import React from "react"
import { DashboardProps } from "./dashboard.types"

const DashboardPage: React.FC<DashboardProps> = () => {
    const clients = useClient()

    return (
        <div className="flex justify-center p-4">
            {clients.isSuccess && (
                <Table
                    columns={[
                        { key: "id", title: "ID" },
                        { key: "client_id", title: "Client ID" },
                        { key: "name", title: "Name" },
                        { key: "realm", title: "Realm" },
                        { key: "protocol", title: "Protocol" },
                        { key: "public_client", title: "Public Client" },
                    ]}
                    data={clients.data.items}
                />
            )}
        </div>
    )
}

export default DashboardPage
