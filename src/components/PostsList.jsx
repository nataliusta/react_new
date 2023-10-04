import { useEffect, useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import styles from './PostsList.module.css';

const PostsList = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts');
            const resData = await response.json();
            setPosts(resData.posts);
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
            {isPosting && 
                <Modal onClose={onStopPosting} >
                    <NewPost 
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            }
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