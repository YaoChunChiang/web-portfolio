import React from 'react'
import styles from './Blog.module.css'

export default function Blog() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        const getBlog = async () => {
            const retData = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
            const postsFromJson = await retData.json();
            setPosts(postsFromJson)
            console.log(postsFromJson)
        }
        getBlog();
    }, []);
    
    return (
        <div className={styles.BlogContainer}>
            {posts.map(post => (
                <div className={styles.BlogItem} key={post.id}>
                    <img src={`https://picsum.photos/200?random=${post.id}`} />
                    <div className={styles.BlogInfo}>
                        <h2>{post.title}</h2>
                        <h3>{post.body}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
