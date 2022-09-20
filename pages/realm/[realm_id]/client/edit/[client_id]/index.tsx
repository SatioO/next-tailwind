import { IClientPayload } from "@api/client/client.types"
import EditClientForm from "@components/feature/EditClientForm"
import Layout from "@components/ui/Layout"
import { useClient, useClientEdit } from "@hooks/client"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import { ClientDetailsPageProps } from "../../client.types"

const ClientDetailsPage: NextPageWithLayout<ClientDetailsPageProps> = ({
    clientId,
    realmId,
}) => {
    const client = useClient(realmId, clientId)
    const editClient = useClientEdit()

    function onEditClient(values: IClientPayload) {
        editClient.mutate({
            clientId: clientId,
            realmId: realmId,
            payload: values,
        })
    }

    return (
        <div className="flex justify-center">
            <div className="w-6/12 space-y-4">
                <div>
                    <h1 className="text-xl font-bold">Edit Client</h1>
                </div>
                {client.isSuccess && (
                    <EditClientForm
                        data={client.data}
                        onSubmit={onEditClient}
                    />
                )}
            </div>
        </div>
    )
}

ClientDetailsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

ClientDetailsPage.getInitialProps = ({ query }) => {
    return {
        realmId: query.realm_id as string,
        clientId: query.client_id as string,
    }
}

export default ClientDetailsPage
