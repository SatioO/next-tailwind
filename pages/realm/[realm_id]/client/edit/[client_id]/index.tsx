import { IClientPayload } from "@api/client/client.types"
import EditClientForm from "@components/feature/EditClientForm"
import Layout from "@components/ui/Layout"
import useClient from "@hooks/client/useClient"
import useClientEdit from "@hooks/client/useClientEdit"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import { ClientDetailsPageProps } from "../../client.types"

const ClientDetailsPage: NextPageWithLayout<ClientDetailsPageProps> = ({
    client_id,
    realm_id,
}) => {
    const client = useClient(realm_id, client_id)
    const editClient = useClientEdit()

    function onEditClient(values: IClientPayload) {
        editClient.mutate({
            clientId: client_id,
            realmId: realm_id,
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
        realm_id: query.realm_id as string,
        client_id: query.client_id as string,
    }
}

export default ClientDetailsPage
