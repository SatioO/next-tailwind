import Layout from "@components/ui/Layout"
import Table from "@components/ui/Table"
import useRealm from "@hooks/realm/useRealm"
import { NextPageWithLayout } from "@pages/_app"
import { ReactElement } from "react"
import { RealmProps } from "./realm.types"
const columns = [
    { key: "id", title: "ID" },
    { key: "name", title: "Name" },
    { key: "display_name", title: "display name" },
    { key: "logo", title: "logo" },
    { key: "support_email", title: "support email" },
    { key: "support_url", title: "support url" },
    {
        key: "edit_username_allowed",
        title: "edit username allowed",
    },
    {
        key: "reg_email_as_username",
        title: "register email as username",
    },
    {
        key: "duplicate_emails_allowed",
        title: "duplicate emails allowed",
    },
    {
        key: "duplicate_phone_numbers_allowed",
        title: "duplicate phone allowed",
    },
]

const RealmPage: NextPageWithLayout<RealmProps> = () => {
    const realms = useRealm()

    return (
        <>
            {realms.isSuccess && (
                <Table columns={columns} data={realms.data?.items} />
            )}
        </>
    )
}

RealmPage.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default RealmPage
