import { IRealmPayload } from "@api/realm/realm.types"
import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useClientsByRealm from "@hooks/client/useClientsByRealm"
import { NextPageWithLayout } from "@pages/_app"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { ClientProps } from "./client.types"
import { columns } from "./columns"

const ClientPage: NextPageWithLayout<ClientProps> = () => {
    const router = useRouter()
    const client = useClientsByRealm(router.query.realm as string)

    function onRowClick(row: IRealmPayload) {}

    return (
        <div className="flex justify-center">
            <div className="w-9/12">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Clients</h1>
                    <p>A list of clients created under {realm} realm</p>
                </div>
                <Table
                    columns={columns}
                    data={client.data ?? []}
                    progress={client.isLoading}
                    onRowClick={onRowClick}
                />
            </div>
        </div>
    )
}

ClientPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ClientPage
