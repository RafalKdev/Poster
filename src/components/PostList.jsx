import classes from "./PostList.module.css";
import Post from "./Post";
const PostList = () => {
  return (
    <ul className={classes.posts}>
      <Post author="Rafal" body="Finally I will get my first job in It" />
      <Post author="Rafal" body="Junior React Developer" />
    </ul>
  );
};
export default PostList;
