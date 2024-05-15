import { useState } from "react";
import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
const PostList = ({ isPosting, onStopPosting }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    event.preventDefault();
    setEnteredBody(event.target.value);
  };
  const authorChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChangeHandler={bodyChangeHandler}
            onAuthorChangeHandler={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Rafal" body="Finally I will get my first job in It" />
        <Post author="Rafal" body="Vamos Barca !!!" />
      </ul>
    </>
  );
};
export default PostList;
