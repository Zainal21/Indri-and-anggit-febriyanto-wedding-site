import React from 'react'
import imageBackground from '../../static/image-1.jpeg'
import tw from 'twin.macro'

export default function Footer() {
  return (
    <div
      tw="py-10 bg-gold-100 relative text-center font-sans "
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1)), url(${imageBackground}) center center / cover no-repeat`
      }}
    >
      {' '}
      <p tw="mb-2">
        Made using{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          tw="font-semibold hover:underline cursor-pointer"
        >
          Gatsby JS
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          tw="font-semibold hover:underline cursor-pointer"
        >
          Tailwind CSS
        </a>
        . Hosted on{' '}
        <a
          href="https://vercel.com/"
          target="_blank"
          tw="font-semibold hover:underline cursor-pointer"
        >
          Vercel
        </a>
        .
      </p>
      <a
        tw="hover:text-gold-900 underline"
        href="https://github.com/Zainal21/anggit-febriyanto-indri-wedding-site/blob/main/LICENSE"
      >
        MIT License
      </a>{' '}
      &copy; {new Date().getFullYear()} Develop by{' '}
      <a
        href="https://muhammadzain.site/contact"
        target="_blank"
        tw="font-semibold hover:underline"
      >
        Muhamad Zainal Arifin
      </a>
    </div>
  )
}
