import classes from "./PostList.module.css";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
const PostList = ({ isPosting, onStopPosting }) => {
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="Rafal" body="Finally I will get my first job in It" />
        <Post author="Rafal" body="Vamos Barca !!!" />
      </ul>
    </>
  );
};
export default PostList;
