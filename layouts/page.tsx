import Head from 'next/head'

import Header from '@components/header'
import Navigation from '@components/navigation'
import {ReactNode} from 'react'
import {metadata as siteMeta} from 'config'
import SEO,{SEOProps} from '@components/seo'
import Footer from '@components/footer'
type MetaProps = {
    title: string;
    description: string
}
type PageProps = {
    meta?:MetaProps;
    children?: ReactNode
}

const Page =({meta, children}:PageProps)=>(
    <>
      <Head>
        <title>
            <SEO {...meta}/>
        </title>
        
      </Head>

      <main >
        
        

       <Header/>
       <Navigation/>
       <article>{children}</article>
       <Footer />
      </main>

      
    </>
)
export default Page;