import styledComponents from "styled-components";

export const DiscusionContainer = styledComponents.section`
    display: flex;
    flex-direction: column;
    font-family: var(--primaryFont);
    border: 1px solid #ececec;
    border-radius: 3px;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  
    h1 {
        background-color: ${(props) => props.theme.colors.tertiary};
        font-size: var(--largeFontSize);
        font-weight: var(--boldFontWeight);
        color: ${(props) => props.theme.text.primary};
        padding: 0.5rem;
        width: 100%;
    }

    div {
        padding: 1rem;
        font-size: var(--smallFontSize);
    }
`;

export const HeaderPostsContainer = styledComponents.div`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ececec;
    width: 95%;    

    h2{     
        color: ${(props) => props.theme.text.title};
        font-size: var(--largeFontSize);
        font-weight: var(--blackFontWeight);
        height: 10%;
    }
    
    img {
        margin: 0.5rem 1rem;
    }
    
    p{
        width: 60%;
        text-align: center;
    }

    button{
        width: 15%;
        min-width: 100px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: -30px;
        background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
        border-radius: 4px;
        border: none;
        color: ${(props) => props.theme.text.white};
        &:hover {
            cursor: pointer;
            background: linear-gradient(0, #FEB254 0%, #F0813D 100%);
        }
    }
`;

export const NewPostContainer = styledComponents.div`

    width: 95%; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ececec;
    h3{
        width: 100%;
        color: ${(props) => props.theme.text.title};
    }
    input{
        width: 100%;
        height: 40px;
        border: 1px solid #CCCCCC;
        border-radius: 3px;
        padding: 0.5rem;
        margin: 0.5rem 0;
        font-size: var(--smallFontSize);
    }

    form{
        width: 100%;
        border: 1px solid #CCCCCC;
        border-radius: 3px;
    }

    textarea{
        border: none;
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        font-size: var(--smallFontSize);
        resize: none;
    }
    div{
        margin: 0;
        padding: 0;
        background: #EAF1F2;
        border-top: 1px solid #CCCCCC;
    
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            border: none;
            margin: 0 1rem;
        }
        >button{
            margin: 0;
            padding: 0.5rem 2rem;
            background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%);
            border-radius: 0px 0px 2px 0px;
            color: ${(props) => props.theme.text.white};
        }
    }
`;

export const AddPostContainer = styledComponents.div`
  display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #ececec;
    width: 95%;    

    h2{     
        color: ${(props) => props.theme.text.title};
        font-size: var(--largeFontSize);
        font-weight: var(--blackFontWeight);
        height: 10%;
    }

    p{
        margin: 1rem 0;
        text-align: center;
    }

    a{
        text-decoration: underline;
        color: ${(props) => props.theme.text.title};
        margin: 1rem 0;
    }

    button{
        width: 15%;
        min-width: 100px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: -30px;
        background: linear-gradient(180deg, #FEB254 0%, #F0813D 100%);
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
        border-radius: 4px;
        border: none;
        color: ${(props) => props.theme.text.white};
        &:hover {
            cursor: pointer;
            background: linear-gradient(0, #FEB254 0%, #F0813D 100%);
        }
    }
`;

export const MissingFeedbackPostContainer = styledComponents.div`
width: 95%;
margin: 2rem 0;
border: 1px solid #E7E7E7;
border-bottom: 1px solid #ececec;
    border-radius: 4px;
    background:rgba(221, 221, 221, 0.4);
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        margin: 0.5rem 1rem;
    }
    h2{
        margin: 0.5rem 0;
    }
    a{
        text-decoration: underline;
        color: ${(props) => props.theme.text.title};
        margin: 1rem 0;
    }

`;
