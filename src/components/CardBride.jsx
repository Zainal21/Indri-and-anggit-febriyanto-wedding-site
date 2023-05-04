import React from 'react'
import tw from 'twin.macro'

export default function CardBride(props) {
  return (
    <div tw="container px-6 py-10 mx-auto">
      <div tw="grid grid-cols-1 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 w-full">
        <div
          className="group"
          tw="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer  hover:bg-gold-100 rounded-xl text-base shadow-xl hover:shadow-2xl mx-2"
        >
          <img
            tw="object-cover w-32 h-32 rounded-full ring-4 ring-gray-200"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />

          <h1 tw="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-gray-600">
            Anggit Febriyanto
          </h1>

          <p tw="mt-2 text-gray-800 capitalize dark:text-gray-300 group-hover:text-gray-800 text-lg">
            Putra pertama dari Sugiyo & Subeni
          </p>
        </div>
        <div
          className="group"
          tw="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer  hover:bg-gold-100 rounded-xl text-base shadow-xl hover:shadow-2xl mx-2"
        >
          <img
            tw="object-cover w-32 h-32 rounded-full ring-4 ring-gray-200"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />

          <h1 tw="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-gray-600">
            Someone
          </h1>

          <p tw="mt-2 text-gray-800 capitalize dark:text-gray-300 group-hover:text-gray-800 text-lg">
            Putri pertama dari - & -
          </p>
        </div>
      </div>
    </div>
  )
}
