import {css} from '@emotion/react'

export const globalStyles = css`
    :root {
        --page-width:800px;
        --page-background: rgb(248,248,248);
        --page-text: rgb(48,48,48);
        --background-accent: rgb(3,84,133);
        --color-text-invert:rgb(248,248,248);
        --color-accent:rgb(4,64,100)
    }

    html,
    body {
    padding: 0;
    margin: 0;
    background-color:var(--page-background);
    color:var(--page-text);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
`

