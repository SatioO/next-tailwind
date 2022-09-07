const Sidebar: React.FC<Props> = () => {
    return (
        <aside className="w-16 bg-white h-screen shadow-lg flex flex-col items-center">
            <div className="p-10 ">A</div>
            <div className="p-10 ">B</div>
            <div className="p-10 ">C</div>
            <div className="p-10 ">D</div>
            <div className="p-10 ">E</div>
        </aside>
    )
}

type Props = {}

export default Sidebar
