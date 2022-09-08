import { forwardRef, PropsWithChildren } from "react"

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
    (props, ref) => {
        return (
            <button
                ref={ref}
                onClick={props.onClick}
                className={
                    "px-8 py-2 bg-" +
                    (props.color || "white") +
                    " rounded-sm shadow-2xl bg-"
                }
            >
                <p className="text-black font-medium">{props.title}</p>
            </button>
        )
    }
)

type Props = {
    title: string
    color?: string
    onClick?: () => void
}

Button.displayName = "FancyButton"

export default Button
