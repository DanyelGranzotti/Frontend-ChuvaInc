import React, { useState } from "react";

const PostHandler = (props) => {
  const { post } = props;
  const [showComments, setShowComments] = useState(false);

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.text}</p>
      <button>Dots</button>
      <p>{post.likes} likes</p>
      <button onClick={() => setShowComments(!showComments)}>
        {post.comments.length}
        resposta
      </button>
      {showComments
        ? post.comments.map((comment) => <p>{comment.text}</p>)
        : null}
    </div>
  );
};

export default PostHandler;
