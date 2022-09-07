import Header from "./header"

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex-1">
            <Header />
            <main className="m-4">{children}</main>
        </div>
    )
}

type Props = { children: JSX.Element }

export default Layout
