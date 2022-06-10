import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 15%;
  width: 85%;
  padding: 0.5rem;
  height: 70px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.tertiary};
  font-family: var(--primaryFont);
  font-weight: var(--regularFontWeight);
  color: ${(props) => props.theme.text.subtitle};
  @media (max-width: 768px) {
    width: 100%;
    position: static;
    margin-top: 70px;
    height: 120px;

    & > * {
      margin: 0;
    }
  }
`;

export const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 80%;
  }

  p {
    font-size: var(--smallFontSize);
    padding-bottom: 0.3rem;
  }
  h1 {
    font-weight: var(--regularFontWeight);
    font-size: var(--xlargeFontSize);
    padding-bottom: 0.3rem;
  }
  h2 {
    font-weight: var(--regularFontWeight);
    font-size: var(--mediumFontSize);
  }

  @media (max-width: 768px) {
    p{
      font-size: var(--xsmallFontSize);
    }
    h1{
      font-size: var(--mediumFontSize);
    }
    h2{
      font-size: var(--xsmallFontSize);
    }
`;

export const LanguageBackground = styled.div`
  display: flex;
  height: 34px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border: 1px solid #cccccc;
  border-radius: 3px;
  font-family: var(--primaryFont);
  font-size: var(--mediumFontSize);
  font-weight: var(--regularFontWeight);

  &: hover {
    cursor: pointer;
  }

  img {
    width: 20px;
    height: 20px;
    margin-left: 0.5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LanguageContainer = styled.select`
  background-color: ${(props) => props.theme.colors.tertiary};
  border: none;
  &: hover {
    cursor: pointer;
  }
`;

export const Language = styled.option`
  border: none;
  padding: 0.5rem 1rem;
  font-size: var(--smallFontSize);
  font-weight: var(--regularFontWeight);
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &: hover {
    cursor: pointer;
  }
`;

export const LanguageButtonText = styled.p`
  margin: 0;
  &: hover {
    cursor: pointer;
  }
`;

export const ProfileContainer = styled.div`
  margin: 0 2rem;
  height: 100%;
  display: flex;
  font-family: var(--secondaryFont);
  text-align: right;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: var(--regularFontWeight);
    font-size: var(--mediumFontSize);
    margin-bottom: 0.3rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  p {
    @media (max-width: 768px) {
      display: none;
    }
  }
  span {
    position: relative;
    top: -0.5rem;
    font-size: var(--smallFontSize);
    margin-left: 0.5rem;
    background-color: #f85959;
    border-radius: 50%;
    padding: 0.1rem 0.4rem;
    color: #fff;
    font-weight: var(--boldFontWeight);
  }
`;

export const ProfileImage = styled.a`
  background-image: url("./images/profileImage.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-left: 0.5rem;
  height: 40px;
  aspect-ratio: 1 / 1;
  &: hover {
    cursor: pointer;
  }
`;
