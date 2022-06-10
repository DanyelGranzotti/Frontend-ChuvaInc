import React from "react";

import * as S from "../../styles/layout/home/Home.styled";

import Resume from "./Resume";

const Home = () => {
  return (
    <S.Container>
      <S.MainSection>
        <S.MainSectionLeft>
          <h1>
            Análise sensorial de preparações funcionais desenvolvidas para
            escolares entre 09 e 15 anos, do município de Campinas/SP
          </h1>
          <video width="100%" controls>
            <source src="movie.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </S.MainSectionLeft>
        <S.MainSectionRight>
          <div>
            <button>
              <img src="./images/downloadIcon.svg" alt="" />
              Download
            </button>
            <button>
              <img src="./images/favoriteIcon.svg" alt="" />
            </button>
            <button>
              <img src="./images/doiIcon.svg" alt="" />
            </button>
          </div>
          <a href="">COMO CITAR ESSE TRABALHO?</a>
          <div>
            <h1>Detalhes</h1>
            <div>
              <p>
                Tipo de Apresentação:
                <strong>Pôster</strong>
              </p>
              <p>
                Eixo temático:
                <strong>Alimentação e saúde (AS)</strong>
              </p>
              <p>
                Palavras-chaves:
                <strong>Alimentos funcionais, alimentação escolar.</strong>
              </p>
              <p>
                Autores:
                <strong>
                  Galileo Galilei¹ Berta Lange de Morretes² Isaac Newton³ Cesar
                  Lattes¹ Stephen Hawking⁴
                </strong>
              </p>
              <div>
                <p>¹Universidade Estadual de Campinas</p>
                <p>²Universidade de São Paulo</p>
                <p>³Instituto Nacional de Pesquisas Espaciais</p>
                <p>⁴Universidade Federal do Rio de Janeiro</p>
              </div>
            </div>
          </div>
        </S.MainSectionRight>
      </S.MainSection>
      <Resume />
    </S.Container>
  );
};

export default Home;
