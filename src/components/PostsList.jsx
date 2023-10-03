import { useState } from 'react';

import NewPost from './NewPost';
import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');

    const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    };

    const onNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    return (
        <>
            <NewPost onBodyChange={onBodyChangeHandler} onNameChange={onNameChangeHandler} />
            <ul className={styles.posts}>
                <Post author={enteredName} body={enteredBody} />
                <Post author='Semih' body='I want to learn React' />
                <Post author='Buddy' body='Hey guys,are there React lovers there?' />
            </ul>
        </>
    );
}

export default PostsList;