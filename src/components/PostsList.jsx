import { useLoaderData } from 'react-router-dom';

import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    const posts = useLoaderData();

    /*const addPostHandler = (postData) => {
        fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }*/

    return (
        <>
            {posts.length > 0 && (
                <ul className={styles.posts}>
                {posts.map((post) => <Post key={post.body} body={post.body} name={post.name} />)}
            </ul>
            )}
            {posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet..</h2>
                <p>Start adding some!</p>
                </div>
            }
        </>
    );
}

export default PostsList;