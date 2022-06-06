import React, { useState } from "react";

import * as S from "../../styles/layout/global/NavBar.styled";

const NavBar = (props) => {
  const { onClick } = props;
  const [navExpanded, setNavExpanded] = useState(false);

  const onClickHandler = () => {
    setNavExpanded(!navExpanded);
  };

  return (
    <S.NavBar>
      <S.Logo>SLACA 2019</S.Logo>
      <S.LogoImage src="/images/13 Slaca.png" />

      <S.NavBarButton onClick={onClickHandler}>Menu</S.NavBarButton>

      <S.Menu extendNavbar={navExpanded}>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Features</S.MenuItem>
        <S.MenuItem>Pricing</S.MenuItem>
        <S.MenuItem>Disabled</S.MenuItem>
      </S.Menu>

      <button onClick={onClick}>Trocar tema</button>
    </S.NavBar>
  );
};

export default NavBar;
