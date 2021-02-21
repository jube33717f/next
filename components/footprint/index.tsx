import { MdCopyright as Copyright } from 'react-icons/md'

// import Atila from './atila-logo'
import { css } from '@emotion/react'

const copyrightIcon = css`
  position: relative;
  top: 0.2ch;
`

const note = css`
  display: block;
  margin: 5ch auto 1ch;
  text-align: center;
  color: var(--color-text-invert);
`

const trademark = css`
  width: 3em;
  align-self: center;
  color: var(--color-text-invert);
  `
const Footprint = () => (
  <>
    {/* <Atila /> */}
    <small css={note}>
      <Copyright css={copyrightIcon} /> Atila Fassina - 2020
    </small>
  </>
)

export default Footprint;