import Layout from "@components/ui/Layout"
import useClient from "@hooks/client/useClient"
import { NextPageWithLayout } from "@pages/_app"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { ClientDetailsPageProps } from "../client.types"

const ClientDetailsPage: NextPageWithLayout<ClientDetailsPageProps> = () => {
    const router = useRouter()
    const client = useClient("master", router.query.client_id as string)
    console.log(client)
    return <></>
}

ClientDetailsPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default ClientDetailsPage
