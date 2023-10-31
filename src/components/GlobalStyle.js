import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    /* GENERAL STYLES */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5em;
        font-weight: 600;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.8em;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: var(--colorTextDark);
        text-decoration: none;
        transition: color var(--cubic-transition);
    }

    a:hover,
    a:focus {
        color: ${p => p.theme.colors.primaryColor};
    }

    button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 0;
        font-size: 16px;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }

    hr {
        border-top: 1px solid var(--colorBorder);
    }

    th,
    td {
        padding: 10px 20px;
        text-align: left;
    }

    tr:nth-child(even) {
        background-color: var(--colorSecondary);
    }

    th {
        background-color: var(--colorPrimary);
        color: var(--white);
        text-transform: uppercase;
    }

    body {
        font-family: var(--font-primary);
        font-size: 16px;
        line-height: 1.2;
        font-weight: 400;
        color: var(--black);
        background-color: var(--colorBody);
        margin: 0;
    }

    #root {
        //margin: 20px;
    }

    label {
        margin-bottom: 5px;
        font-weight: 600;
    }

    input {
        padding: 5px 10px;
        border-radius: 5px;
        border: 1px solid var(--black);
    }

    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        
        white-space: nowrap;
        clip-path: inset(100%);
        clip: rect(0 0 0 0);
        overflow: hidden;
    }

    :root {
    /* 
    ================
    COLORS 
    ================
    */
    --white: #ffffff;
    --black: #000000;

    --colorPrimary: #6200ee;
    --colorPrimaryDark: #4a01af;
    --colorSecondary: #303030;
    --colorText: #141414;
    --colorBody: #eaedee;

    --colorBorder: rgb(65 64 64 / 20%);

    /* 
    ==============
    FONTS
    ==============
    */
    --font-primary: Inter, sans-serif;

    /*
    ===========
    OTHER
    ===========
    */

    --cubic-transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
`;
