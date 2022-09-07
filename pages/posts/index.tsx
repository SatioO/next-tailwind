import type { GetStaticProps } from "next"
import styles from "../../styles/post.module.css"
import type { Post } from "./post"

type Props = { data: Post[] }

const Posts: React.FC<Props> = (props) => {
    return (
        <div className={styles.container}>
            {props.data.map((post) => (
                <div key={post.id} className={styles.card}>
                    <div className={styles.title}>{post.title}</div>
                    <div className={styles.body}>{post.body}</div>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
        const data = await response.json()
        return { props: { data } }
    } catch (error) {
        return { props: { data: [] } }
    }
}

export default Posts
