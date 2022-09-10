import { useSession } from "next-auth/react"
import React from "react"
import fetcher from "../../lib/axios"

type PostsProps = {}

const Posts: React.FC<PostsProps> = () => {
    const session = useSession()
    console.log({ session })

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
