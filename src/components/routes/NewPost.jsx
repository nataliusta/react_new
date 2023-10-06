import { Link, Form } from 'react-router-dom';
import Modal from '../Modal';
import styles from './NewPost.module.css';

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={styles.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p className={styles.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', name: '...' }
  await fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts.json', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}