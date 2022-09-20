import { IClientPayload } from "@api/client/client.types"
import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useClientsByRealm from "@hooks/client"
import { NextPageWithLayout } from "@pages/_app"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { useQueryClient } from "react-query"
import { ClientPageProps } from "./client.types"
import { columns } from "./columns"

const ClientPage: NextPageWithLayout<ClientPageProps> = ({ realmId }) => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const client = useClientsByRealm(realmId)

    function onRowClick(row: IClientPayload) {
        queryClient.setQueryData(
            ["realm", realmId, "client", row.client_id],
            row
        )
        router.push(`/realm/${realmId}/client/edit/${row.client_id}`)
    }

    return (
        <div className="flex justify-center">
            <div className="w-9/12">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Clients</h1>
                    <p>
                        A list of clients created under {router.query.realmId}{" "}
                        realm
                    </p>
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

ClientPage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}

ClientPage.getInitialProps = ({ query }) => {
    return {
        realmId: query.realm_id as string,
    }
}

export default ClientPage
