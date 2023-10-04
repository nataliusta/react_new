import styles from './NewPost.module.css';

function NewPost(props) {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea 
            id="body" 
            onChange={props.onBodyChange}
            required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input 
            type="text" 
            onChange={props.onNameChange}
            id="name" required />
      </p>
      <p className={styles.actions}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button onSubmit={onSubmitHandler}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;