import React, { useState } from "react";

import * as S from "../../styles/layout/global/PostHandler.styled";

import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PostHandler = (props) => {
  const { post } = props;
  const [showComments, setShowComments] = useState(false);

  return (
    <S.PostContainer>
      <h2>{post.title}</h2>
      <h3>{post.author}</h3>
      <p>{post.text}</p>

      <div>
        <button>
          <MoreVertIcon />
        </button>

        <button>
          <FavoriteIcon />
        </button>

        <p>{post.likes} likes</p>

        <button
          className="responses"
          onClick={() => setShowComments(!showComments)}
        >
          {post.comments.length} resposta
        </button>
      </div>
      {showComments
        ? post.comments.map((comment) => (
            <S.Comment>
              <div>
                <h3>{comment.author}</h3>
                {comment.position === "user" ? (
                  <></>
                ) : (
                  <div>
                    <img src="./images/checkIconOrange.svg" alt="" />
                    <p>{comment.position}</p>
                  </div>
                )}
              </div>
              <p>{comment.text} </p>
            </S.Comment>
          ))
        : null}
    </S.PostContainer>
  );
};

export default PostHandler;
