import { RefObject, useEffect, useState } from "react"

function useResize(ref: RefObject<HTMLDivElement>) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: ref.current?.offsetWidth ?? 0,
                height: ref.current?.offsetHeight ?? 0,
            })
        }

        if (ref.current) {
            handleResize()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [ref])

    return dimensions
}

export default useResize
