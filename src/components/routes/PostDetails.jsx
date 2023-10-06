import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../Modal';
import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.name}>{post.name}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts.json' + params.postId);
  const resData = await response.json();
  return resData.post;
}