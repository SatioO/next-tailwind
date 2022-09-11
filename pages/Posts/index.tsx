import React from "react"
import fetcher from "../../lib/axios"
import { PostsProps } from "./posts.types"

const Posts: React.FC<PostsProps> = () => {
    const [random, setRandom] = React.useState<number>()

    async function fetchData() {
        await fetcher.get("https://jsonplaceholder.typicode.com/posts")
    }

    React.useEffect(() => {
        fetchData()
    }, [random])

    return (
        <>
            <button onClick={() => setRandom(Date.now())}>click me</button>
        </>
    )
}

export default Posts
