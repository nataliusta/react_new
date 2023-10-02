import Post from './Post';
import styles from './PostsList.module.css';

const PostsList = () => {
    return (
        <ul className={styles.posts}>
            <Post author='Natali' body='React JS is awesome!' />
            <Post author='Semih' body='I want to learn React' />
            <Post author='Buddy' body='Hey guys,are there React lovers there?' />
        </ul>
    );
}

export default PostsList;