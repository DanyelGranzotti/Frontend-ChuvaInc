import styled from "styled-components";

export const NavBar = styled.nav`
  width: 15%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: left;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.text.primary};

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    flex-direction: row;
    box-shadow: 0 2px 4px grey;
  }
`;

export const Logo = styled.a`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(180deg, #ffb354, #ee7a3a);
  color: ${(props) => props.theme.text.white};

  font-family: var(--primaryFont);
  font-size: var(--xxlargeFontSize);
  font-weight: var(--boldFontWeight);

  &:hover {
    background-image: linear-gradient(0deg, #ffb354, #ee7a3a);
  }

  @media (max-width: 768px) {
    width: 220px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

export const NavBarButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  @media (max-width: 768px) {
    display: ${(props) => (props.extendNavbar ? "block" : "none")};
    position: absolute;
    top: 70px;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid black;
  }
`;

export const MenuItem = styled.li`
  text-align: left;
  margin: 0;

  :hover {
    background-color: #eee;
  }
`;
