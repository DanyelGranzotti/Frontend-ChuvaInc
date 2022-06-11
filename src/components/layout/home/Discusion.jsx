import React, { useState } from "react";

import PostHandler from "../global/PostHandler";

import * as S from "../../styles/layout/home/Discusion.styled";
import posts from "../data/posts";

import AddIcon from "@mui/icons-material/Add.js";

const Discusion = () => {
  const [newPost, setNewPost] = useState(false);
  const [addPost, setAddPost] = useState(false);

  return (
    <S.DiscusionContainer>
      <h1>Discussão </h1>
      {newPost ? (
        addPost ? (
          <>
            <S.AddPostContainer>
              <h2>Seu tópico foi enviado com sucesso! :D</h2>

              <p>
                Agradecemos por sua contribuição, uma notificação será enviada
                ao seu email assim que seu tópico for respondido!
              </p>

              <a href="">Descubra outros trabalhos!</a>

              <button onClick={() => setNewPost(!newPost)}>
                <AddIcon />
                criar tópico
              </button>
            </S.AddPostContainer>
            <S.MissingFeedbackPostContainer>
              <div>
                <img src="./images/checkIcon.svg" alt="" />
                <h2>Aguardando feedback dos autores</h2>
                <a href="">Editar tópico</a>
              </div>
            </S.MissingFeedbackPostContainer>
          </>
        ) : (
          <S.NewPostContainer>
            <p>
              Tem uma dúvida ou sugestão? Compartilhe seu feedback com os
              autores!
            </p>
            <h3>Assunto</h3>
            <input
              type="text"
              placeholder="Defina um tópico sucinto para notificar os autores..."
            />
            <h3>Conteúdo</h3>
            <form action="">
              <textarea
                placeholder="Escreva aqui o conteúdo da sua dúvida ou sugestão..."
                rows="5"
              ></textarea>
              <div>
                <span>
                  <button>
                    <strong>B</strong>
                  </button>
                  <button>
                    <i>I</i>
                  </button>
                </span>
                <button onClick={() => setAddPost(!addPost)}>Enviar</button>
              </div>
            </form>
          </S.NewPostContainer>
        )
      ) : (
        <S.HeaderPostsContainer>
          <h2>Compartilhe suas ideias ou dúvidas com os autores!</h2>
          <div>
            <img src="./images/icon01.svg" alt="" />
            <img src="./images/icon02.svg" alt="" />
            <img src="./images/icon03.svg" alt="" />
          </div>
          <p>
            Sabia que o maior estímulo no desenvolvimento científico e cultural
            é a curiosidade? Deixe seus questionamentos ou sugestões para o
            autor!
          </p>

          <button onClick={() => setNewPost(!newPost)}>
            <AddIcon />
            criar tópico
          </button>
        </S.HeaderPostsContainer>
      )}
      {posts.map((post) => (
        <PostHandler post={post} />
      ))}
    </S.DiscusionContainer>
  );
};
export default Discusion;
