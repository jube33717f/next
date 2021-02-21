import {css} from '@emotion/react'

import {IoMdPlanet as Saturn} from 'react-icons/io'

const saturnStyles = css`
    position: relative;
    top: 0.25em;
    margin-left: -0.75rem;
    margin-right: -0.5rem;
`

const logoStyles = css `
    font-size: 7rem;
    display:block;
    text-align: center;
    font-variant: small-caps;
    color:var(--color-text-invert)
`
const Logo = ()=>(
    <span css={logoStyles}>
        devl
        <Saturn css={saturnStyles}/>
        g
    </span>
)
export default Logo;