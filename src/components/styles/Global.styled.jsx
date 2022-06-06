import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&family=Roboto:wght@400;500;700;900&display=swap');

    :root {
        --primaryFont: 'Roboto', sans-serif;
        --secondaryFont: 'Quicksand', sans-serif;
        --xsmallFontSize: 0.75rem;
        --smallFontSize: 0.875rem;
        --mediumFontSize: 1rem;
        --largeFontSize: 1.125rem;
        --xlargeFontSize: 1.25rem;
        --xxlargeFontSize: 1.5rem;
        --regularFontWeight: 400;
        --mediumFontWeight: 500;
        --boldFontWeight: 700;
        --blackFontWeight: 900;


        --transition: all 0.3s ease-in-out;
    }


    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }


    /* Custom ScrollBar */
    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-track{
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb{
        background: #888;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover{
        background: #555;
    }
`;
