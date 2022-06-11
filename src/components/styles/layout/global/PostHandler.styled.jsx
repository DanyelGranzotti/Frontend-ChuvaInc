import styled from "styled-components";

export const PostContainer = styled.div`
  width: 95%;
  margin-top: 2rem;
  padding: 0 !important;
  border: 1px solid #e7e7e7;
  border-bottom: 1px solid #ececec;
  border-radius: 4px;
  justify-content: left;
  align-items: center;
  text-align: left;

  h2 {
    margin: 1.5rem;
    color: ${(props) => props.theme.text.title};
    font-size: var(--largeFontSize);
  }
  p {
    margin: 0 1.5rem;
  }
  h3 {
    margin: 0 1.5rem;
    color: ${(props) => props.theme.text.secondary};
    font-size: var(--smallFontSize);
    margin-bottom: 0.5rem;
  }

  > div {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    color: ${(props) => props.theme.text.tertiary};
    font-size: var(--smallFontSize);

    > div {
      display: flex;
    }

    > button {
      padding: 0.2rem;
      margin-left: 0.5rem;
      color: ${(props) => props.theme.text.white};
      border: none;
      border-radius: 4px;
      background: #ed7839;
      font-size: var(--smallFontSize);
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
        0px 2px 2px rgba(0, 0, 0, 0.24);
      color: ${(props) => props.theme.text.white};
      &:hover {
        cursor: pointer;
        background: linear-gradient(0, #feb254 0%, #f0813d 100%);
      }
    }

    > button:first-child {
      margin: 0;
      background: none;
      box-shadow: none;
      color: ${(props) => props.theme.text.title};
    }

    > button:last-child {
      margin: 0;
      background: none;
      box-shadow: none;
      color: ${(props) => props.theme.text.tertiary};
    }
  }
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  height: fit-content !important;
  border: 1px solid #ececec;
  > div {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      color: ${(props) => props.theme.text.title};
    }
  }
  p {
    text-align: left;
  }
`;
