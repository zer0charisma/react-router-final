import React from "react";
import { useRouteMatch, Route, Routes, Link } from "react-router-dom";

import Post from "./Post";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

const PostList = ({ posts }) => {
  const { url } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Routes>
          <Route path={`${url}/:postId`}>
            {/* Pass posts to the Post component */}
            <Post posts={posts} />
          </Route>
          <Route path={url}>
            <NoPostSelectedMessage />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default PostList;
