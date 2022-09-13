import { IRealmPayload } from "@api/realm/realm.types"
import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useRealm from "@hooks/realm/useRealm"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import { DashboardProps } from "./dashboard.types"

const columns = [
    { key: "id", name: "ID", selector: (row: IRealmPayload) => row.id },
    {
        key: "name",
        name: "Name",
        selector: (row: IRealmPayload) => row.name,
    },
    {
        key: "display_name",
        name: "Display Name",
        selector: (row: IRealmPayload) => (
            <div className="capitalize">{row.display_name}</div>
        ),
    },
    {
        key: "logo",
        name: "Logo",
        selector: (row: IRealmPayload) => row.logo || "Not configured",
    },
    {
        key: "support_email",
        name: "Support Email",
        selector: (row: IRealmPayload) => row.support_email || "Not configured",
    },
    {
        key: "support_url",
        name: "Support URL",
        selector: (row: IRealmPayload) => row.support_email || "Not configured",
    },
    {
        key: "enabled",
        name: "Status",
        selector: (row: IRealmPayload) => String(row.enabled),
    },
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
