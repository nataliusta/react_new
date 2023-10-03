import classes from './NewPost.module.css';

function NewPost(props) {

  return (
    <form className={classes.form}>
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
    </form>
  );
}

export default NewPost;