import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal';
import styles from './PostsList.module.css';

const PostsList = ({isPosting, onStopPosting}) => {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
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
            <ul className={styles.posts}>
                <Post author='Semih' body='I want to learn React' />
                <Post author='Buddy' body='Hey guys,are there React lovers there?' />
            </ul>
        </>
    );
}

export default PostsList;