import styled from "styled-components";
import FormGroup from "@mui/material/FormGroup";

export const NavBar = styled.nav`
  width: 15%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: left;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.text.primary};
  font-family: var(--primaryFont);
  box-shadow: 0px 0px 10px ${(props) => props.theme.colors.shadow};

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    flex-direction: row;
    box-shadow: 0 2px 4px grey;
    justify-content: space-between;
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
    width: 120px;
    font-size: var(--largeFontSize);
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
  width: 30px;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.text.primary};

  &:hover {
    color: ${(props) => props.theme.text.secondary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  @media (max-width: 768px) {
    display: ${(props) => (props.extendNavbar ? "block" : "none")};
    background-color: ${(props) => props.theme.colors.background};
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
  display: flex;
  margin: 0;
  font-size: var(--mediumFontSize);
  border-bottom: 2px solid #e7e7e7;

  img {
    display: none;
  }
  p {
    padding: 0.5rem 1rem;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.tertiary};

    img {
      display: block;
    }
  }
`;

export const CustomFormGroup = styled.div`
  align-self: center;
  margin-top: 1rem;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;
