import React from 'react'
import { Link as GLink } from 'gatsby'
import { Logo, Layout, Footer } from '../components'
import tw from 'twin.macro'
const ErrorPage = () => {
  return (
    <Layout css={tw`min-h-screen bg-gold-100 overflow-hidden`}>
      <div
        className="container max-w-screen-md"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block my-10">
          <GLink to="/">
            <Logo />
          </GLink>
        </div>
      </div>
      <div tw="py-24 bg-white relative">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            404
          </div>
          <div tw="text-center">Page Not Found</div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default ErrorPage
