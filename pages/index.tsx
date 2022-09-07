import type { ReactElement } from "react"
import Layout from "../components/layout"
import { NextPageWithLayout } from "./_app"

const Home: NextPageWithLayout = () => {
    return <h1 className="text-3xl font-bold">Welcome</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Home
