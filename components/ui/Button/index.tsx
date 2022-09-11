import { forwardRef, PropsWithChildren } from "react"
import { ButtonProps } from "./button.types"

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
    ({ title, onClick, color = "white" }, ref) => {
        return (
            <button
                ref={ref}
                onClick={onClick}
                className={`px-8 py-2 bg-${color} rounded-sm shadow-2xl`}
            >
                <p className="text-black font-medium">{title}</p>
            </button>
        )
    }
)

Button.displayName = "Button"

export default Button
