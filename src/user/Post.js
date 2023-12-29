import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deletePost } from "../api";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

const Post = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === Number(postId));
  const navigate = useNavigate();

  const handleDelete = async () => {
    const result = window.confirm("Are you sure you want to delete this post?");
    if (result) {
      try {
        // Use deletePost directly instead of onDelete
        await deletePost(post.id);
        console.log("Post deleted successfully");
        navigate.push("/");
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  if (!post) {
    return <NoPostSelectedMessage />;
  }

  return (
    <article className="col-12 p-4 border">
      <h3 className="display-4 mb-4">{post.title}</h3>
      <p>{post.body}</p>
      <div>
        <button onClick={handleDelete}>Delete Post</button>
      </div>
    </article>
  );
};

export default Post;
