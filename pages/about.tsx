import {css,keyframes} from '@emotion/react'
import Image from 'next/image'
import Page from '@layouts/page'
import {FaReact as ReactIcon} from 'react-icons/fa'


const rotate = keyframes`
    from{
        transform: rotate(0)
    }
    to{
        transform: rotate(360deg)
    }
`

const reactIconStyle = css`
  margin-left: 1ch;
  position: realtive;
  top: 5px;
  color: var(--color-accent);
  animation: ${rotate} 5s linear infinite;
`

const header = css`
    display: flex;
    max-width:var(--page-width);
    justify-content: space-around;
    align-items: center;
    padding: 0  2ch;
    margin: 0 auto;
`

const pilotPicture = css`
    border-radius:50%;  
`
const bie = css`
    margin-top:5ch;
    p{
        max-width:68ch;
        margin: 0 auto;
    }
    > p + p{
        margin-top: 3ch;
    }
`

const footer = css`
    margin-top:3ch;
    text-align:right;
    margin-right:5ch
`
const About = ()=>
 (<Page meta={{
     title:"About",
     description:'type type...'
 }}> 
    <section css={header}>
        <Image 
        css={pilotPicture}
        src='/Architecture-V3.png'
        width={500}
        height={300}
        />
        <h2>
            Sb Sb <ReactIcon css={reactIconStyle}/>
        </h2>
    </section>
    <section css={bie}>
        <p>
                Important notice

            Strict travel restrictions are in place for certain countries due to COVID-19. You should not apply for any visa until checking the latest information.

            If you are an immediate family member of either an Australian citizen or permanent resident, you may be eligible to apply for a Visitor Visa (Subclass 600).

            If your visa was granted after 1 February 2020 and you are affected by the current travel restrictions, you will not be able to check your visa details and conditions using Visa Entitlement Verification Online (VEVO) until the restrictions are lifted. You should refer to your v
        </p>
    </section>
    <section css={footer}>
        <a 
        href='www.google.com'
        rel='noopener noreferrer'
        target='_blank'>
                GOOGLE
        </a>
    </section>
</Page>)

export default About;