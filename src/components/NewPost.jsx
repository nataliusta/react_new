import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost() {
    const [currentState, setCurrentState] = useState();

    

    const changeBodyHandle = (event) => {
        event.target.value(setCurrentState);
    };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea 
            id="body" 
            onChange={changeBodyHandle}
            required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input 
            type="text" 
            
            id="name" required />
      </p>
    </form>
  );
}

export default NewPost;