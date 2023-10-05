import { useEffect, useState } from 'react';

import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts');
            const resData = await response.json();
            setPosts(resData.posts);
            setIsFetching(false);
        }

        fetchPosts();
    }, []);

    const addPostHandler = (postData) => {
        fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json'
            }
        });
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {!isFetching && posts.length > 0 && (
                <ul className={styles.posts}>
                {posts.map((post) => <Post key={post.body} body={post.body} name={post.name} />)}
            </ul>
            )}
            {!isFetching && posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                <h2>There are no posts yet..</h2>
                <p>Start adding some!</p>
                </div>
            }
            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading...</p>
                </div>
            )}
        </>
    );
}

export default PostsList;