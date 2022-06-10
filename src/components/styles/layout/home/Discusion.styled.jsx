import styledComponents from "styled-components";

export const DiscusionContainer = styledComponents.section`
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

    div {
        padding: 1rem;
        font-size: var(--smallFontSize);
    }
`;

export const PostContainer = styledComponents.div`
    display: flex;
`;
