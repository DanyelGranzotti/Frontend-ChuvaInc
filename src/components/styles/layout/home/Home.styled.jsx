import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 15%;
  width: 85%;
  margin-top: 70px;
  padding: 0 2rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.text.secondary};

  @media (max-width: 768px) {
    margin-top: 0px;
    position: static;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
  }
`;

export const MainSection = styled.section`
  display: flex;
  width: 100%;
  height: 70%;
  padding: 1rem;
  font-family: var(--primaryFont);
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MainSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100%;

  h1 {
    color: ${(props) => props.theme.text.title};
    font-size: var(--largeFontSize);
    font-weight: var(--blackFontWeight);
    height: 10%;
  }

  video {
    margin-top: 1rem;
    width: 100%;
    height: 60vh;
    @media (max-width: 768px) {
      height: auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const MainSectionRight = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 0 1rem 0 2rem;
  @media (max-width: 768px) {
    padding: 0;
  }

  div:first-child {
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    padding-top: 0.5rem;
    padding-left: 1rem;
    border: none;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      padding: 0;
    }
    button {
      justify-content: center;
      align-items: center;
      height: 30px;
      border: none;
      margin: 0 0.2rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      border-radius: 4px;
      cursor: pointer;
      background-color: ${(props) => props.theme.text.title};
      color: ${(props) => props.theme.text.white};
      &:hover {
        border: 1px solid ${(props) => props.theme.text.primary};
      }
    }
    img {
      color: ${(props) => props.theme.colors.background};
      margin-right: 0.5rem;
    }
  }

  a {
    width: 100%;
    color: ${(props) => props.theme.text.title};
    text-decoration: none;
    text-align: left;
    padding: 0.5rem 0;
    padding-left: 1rem;
    @media (max-width: 768px) {
      padding-left: 0;
    }
  }

  div {
    border: 1px solid #ececec;
    border-radius: 3px;
    height: 60vh;
    overflow: hidden;
    h1 {
      background-color: ${(props) => props.theme.colors.tertiary};
      font-weight: var(--mediumFontWeight);
      color: ${(props) => props.theme.text.primary};
      padding: 0.5rem;
    }
    div {
      height: 90%;
      border: none;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      justify-content: end;
      font-size: var(--smallFontSize);
      div {
        border: none;
        font-size: var(--xsmallFontSize);
        padding: 0;
      }
    }
    @media (max-width: 768px) {
      height: auto;
      div {
        margin-top: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
