import classes from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required={3} onChange={props.onBodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={props.onAuthorChangeHandler}
        />
      </p>
    </form>
  );
};
export default NewPost;
