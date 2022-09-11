import Header from "../Header"
import { LayoutProps } from "./layout.types"

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex-1">
            <Header />
            <main className="m-4">{children}</main>
        </div>
    )
}

export default Layout
