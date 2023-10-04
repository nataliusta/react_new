import styles from './Post.module.css';

const Post = (props) => {

    return(
        <li className={styles.post}>
            <p className={styles.text}>{props.body}</p>
            <p className={styles.author}>{props.name}</p>
        </li>
    );
}

export default Post;