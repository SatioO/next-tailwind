import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useRealm from "@hooks/realm/useRealm"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import { DashboardProps } from "./dashboard.types"

const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "display_name", title: "Display Name" },
    { key: "logo", title: "Logo" },
    { key: "support_email", title: "Support Email" },
    { key: "support_url", title: "Support URL" },
]

const DashboardPage: NextPageWithLayout<DashboardProps> = () => {
    const realms = useRealm()

    return (
        <div className="flex justify-center">
            <div className="w-9/12">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Realm</h1>
                    <p>A list of realms created in an IDP application</p>
                </div>
                <Table columns={columns} data={realms.data?.items ?? []} />
            </div>
        </div>
    )
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default DashboardPage
