import { forwardRef, PropsWithChildren } from "react"
import { ButtonProps } from "./button.types"

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    (props, ref) => {
        return (
            <button
                ref={ref}
                onClick={props.onClick}
                className={"px-8 py-2 bg-white rounded-sm shadow-2xl"}
            >
                <p className="text-black font-medium">{props.title}</p>
            </button>
        )
    }
)

Button.displayName = "Button"

export default Button
