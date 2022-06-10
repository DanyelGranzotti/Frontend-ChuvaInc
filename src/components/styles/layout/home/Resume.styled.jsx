import styled from "styled-components";

export const ResumeContainer = styled.section`
  display: flex;
  flex-direction: column;
  font-family: var(--primaryFont);
  border: 1px solid #ececec;
  border-radius: 3px;
  margin-top: 2rem;

  h1 {
    background-color: ${(props) => props.theme.colors.tertiary};
    font-size: var(--largeFontSize);
    font-weight: var(--boldFontWeight);
    color: ${(props) => props.theme.text.primary};
    padding: 0.5rem;
  }

  p {
    padding: 1rem;
    font-size: var(--smallFontSize);
  }

  button {
    border: none;
    background-color: transparent;
    color: ${(props) => props.theme.text.title};
    &:hover {
      color: ${(props) => props.theme.text.subtitle};
    }
  }
`;
