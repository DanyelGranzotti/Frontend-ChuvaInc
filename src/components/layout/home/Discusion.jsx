import React, { useState } from "react";

import PostHandler from "../global/PostHandler";

import * as S from "../../styles/layout/home/Discusion.styled";
import posts from "../data/posts";

const Discusion = () => {
  const [newPost, setNewPost] = useState(false);

  return (
    <S.DiscusionContainer>
      <h1>Discussão </h1>
      {newPost ? (
        <div>
          <input type="text" placeholder="Digite aqui..." />
        </div>
      ) : (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            euismod, nisl eget consectetur sagittis, nisl nisi consectetur nisi,
            euismod consectetur nisi nisl eget consectetur sagittis, nisl nisi
            consectetur
          </p>
          <button onClick={() => setNewPost(!newPost)}>
            {newPost ? "fechar" : "responder"}
          </button>
        </div>
      )}
      {posts.map((post) => (
        <PostHandler post={post} />
      ))}
    </S.DiscusionContainer>
  );
};
export default Discusion;
