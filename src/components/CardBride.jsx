import React from 'react'
import tw from 'twin.macro'
import brideWoman from '../../static/images/pengantin1.png'
import brideMan from '../../static/images/pengantin2.png'

export default function CardBride(props) {
  return (
    <div tw="container px-6 py-10 mx-auto">
      <div tw="grid grid-cols-1 xl:mt-16 md:grid-cols-2 xl:grid-cols-2 w-full">
        <div
          className="group photo"
          tw="flex flex-col my-3 items-center p-8 transition-colors duration-300 transform cursor-pointer  hover:bg-gold-100 rounded-xl text-base shadow-xl hover:shadow-2xl mx-2"
        >
          <img
            tw="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 "
            src={brideMan}
            alt="bride man"
          />
          <h1 tw="mt-4 text-2xl font-bold text-gray-800 capitalize group-hover:text-gray-600">
            Anggit Febriyanto
          </h1>
          <p tw="mt-2 text-gray-800 capitalize group-hover:text-gray-800 md:text-xl text-lg font-sans text-center font-semibold">
            Anak dari Bp. Sugiyo & Ibu Beni Setyowati
          </p>
          <p tw="mt-2 text-gray-800 capitalize group-hover:text-gray-800 md:text-xl text-lg  font-sans text-center">
            Sidorejo RT 01/ RW 12, kaliboto, Mojogedang
          </p>
        </div>
        <div
          className="group photo"
          tw="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer  hover:bg-gold-100 rounded-xl text-base shadow-xl hover:shadow-2xl mx-2"
        >
          <img
            tw="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
            src={brideWoman}
            alt="bride woman"
          />

          <h1 tw="mt-4 text-2xl font-bold text-gray-800 capitalize group-hover:text-gray-600">
            Indri Febryani
          </h1>

          <p tw="mt-2 text-gray-800 capitalize group-hover:text-gray-800 md:text-xl text-lg   text-center font-sans font-semibold">
            Anak dari Bp. Ngali & Ibu Yati
          </p>
          <p tw="mt-2 text-gray-800 capitalize group-hover:text-gray-800 md:text-xl text-lg  font-sans text-center font-medium">
            Ngablak Rt RT 04/ RW 06, Karangmojo, Tasikmadu
          </p>
        </div>
      </div>
    </div>
  )
}
