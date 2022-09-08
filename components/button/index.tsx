const Button: React.FC<Props> = ({ title, color = "white", onClick }) => {
    console.log("color", color)
    return (
        <button
            onClick={onClick}
            className={"px-8 py-2 bg-" + color + " rounded-sm shadow-2xl"}
        >
            <p className="text-black font-medium">{title}</p>
        </button>
    )
}

type Props = {
    title: string
    color?: string
    onClick?: () => void
}

export default Button
