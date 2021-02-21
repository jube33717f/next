import {css} from '@emotion/react'
//style for only screen readers
//-If you want to hide CSS elements from the UI, but it's still needed semantically for your page

const SR_ONLY = `
    clip: react(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`
const container = css`
    min-height: 40vh;
    background:var(--background-accent);
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`



const title = css` 
    ${SR_ONLY}
`
export  {container,title}
