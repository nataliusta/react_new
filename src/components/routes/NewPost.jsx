import { useState } from 'react';
import Modal from '../Modal';
import styles from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
    const [enteredName, setEnteredName] = useState('');
    

    const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    };

    const onNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      name: enteredName
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea 
              id="body" 
              onChange={onBodyChangeHandler}
              required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input 
              type="text" 
              onChange={onNameChangeHandler}
              id="name" required />
        </p>
        <p className={styles.actions}>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;