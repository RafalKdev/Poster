import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
const PostList = ({ isPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((prevState) => {
      return [postData, ...prevState];
    });
  };
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Rafal" body="Finally I will get my first job in It" />
        <Post author="Rafal" body="Vamos Barca !!!" />
        {posts.map((post) => (
          <Post key={post.author} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
};
export default PostList;
