import { NextPage } from "next"
import { AppProps } from "next/app"
import React, { ReactElement, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { queryConfig } from "../lib/react-query"

import { SessionProvider } from "next-auth/react"
import "../styles/globals.css"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
    const [queryClient] = React.useState(() => new QueryClient(queryConfig))

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <QueryClientProvider client={queryClient}>
            <SessionProvider session={session}>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
            </SessionProvider>
        </QueryClientProvider>
    )
}
