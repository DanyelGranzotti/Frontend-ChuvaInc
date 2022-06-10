import React from "react";

import * as S from "../../styles/layout/global/Header.styled";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.MainContainer>
          <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
          <h1>
            Anais do 13º Simpósio Latino Americano de Ciência de Alimentos{" "}
          </h1>
          <h2>ISSN: 1234-5678</h2>
        </S.MainContainer>
        <S.LanguageBackground>
          <img src="./images/languageLogo.svg" alt="" />
          <S.LanguageContainer>
            <S.Language value="">PT, BR </S.Language>
            <S.Language value="">EN, USA</S.Language>
          </S.LanguageContainer>
        </S.LanguageBackground>
        <S.ProfileContainer>
          <div>
            <h3>Bem vindo!</h3>
            <p>alguem12@galoascience.com</p>
          </div>
          <S.ProfileImage>
            <span>2</span>
          </S.ProfileImage>
        </S.ProfileContainer>
      </S.Header>
    </>
  );
};

export default Header;
