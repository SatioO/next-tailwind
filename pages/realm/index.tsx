import { IRealmPayload } from "@api/realm/realm.types"
import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useRealm from "@hooks/realm/useRealm"
import { NextPageWithLayout } from "@pages/_app"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { columns } from "./columns"
import { RealmProps } from "./realm.types"

const RealmPage: NextPageWithLayout<RealmProps> = () => {
    const realms = useRealm()
    const router = useRouter()

    function onRowClick(row: IRealmPayload) {
        router.push(`/realm/${row.name}/client`)
    }

    return (
        <div className="flex justify-center">
            <div className="w-9/12">
                <div className="p-4">
                    <h1 className="text-xl font-bold">Realms</h1>
                    <p>A list of realms created in an IDP application</p>
                </div>
                <Table
                    columns={columns}
                    data={realms.data?.items ?? []}
                    progress={realms.isLoading}
                    onRowClick={onRowClick}
                />
            </div>
        </div>
    )
}

RealmPage.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>
}

export default RealmPage
