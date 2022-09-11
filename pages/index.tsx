import Layout from "@components/ui/Layout"
import type { ReactElement, ReactNode } from "react"
import { NextPageWithLayout } from "./_app"

type HomeProps = { children: ReactNode }

const Home: NextPageWithLayout<HomeProps> = () => {
    return <h1 className="text-3xl font-bold">Home</h1>
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
}

export default Home
