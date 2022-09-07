const Button: React.FC<Props> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="px-8 py-2 bg-white rounded-sm shadow-2xl"
        >
            <p className="text-black font-medium">{props.title}</p>
        </button>
    )
}

type Props = {
    onClick: () => void
    title: string
    variant?: string
}

export default Button
