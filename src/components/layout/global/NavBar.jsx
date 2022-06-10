import React, { useState } from "react";

import * as S from "../../styles/layout/global/NavBar.styled";

import MenuIcon from "@mui/icons-material/Menu.js";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import LightModeIcon from "@mui/icons-material/LightMode.js";
import DarkModeIcon from "@mui/icons-material/DarkMode.js";

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

      <S.Menu extendNavbar={navExpanded}>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Apresentação</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Comitês</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Autores</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Eixos temáticos</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Trabalhos</p>
        </S.MenuItem>
        <S.MenuItem>
          <img src="./images/Rectangle.svg" alt="" />
          <p>Contato</p>
        </S.MenuItem>
      </S.Menu>

      <S.CustomFormGroup>
        <LightModeIcon />
        <Switch onClick={onClick} />
        <DarkModeIcon />
      </S.CustomFormGroup>

      <S.NavBarButton onClick={onClickHandler}>
        <MenuIcon />
      </S.NavBarButton>
    </S.NavBar>
  );
};

export default NavBar;
