import React from 'react'
import tw, { styled } from 'twin.macro'

export default function CommentCard({
  name,
  info,
  created_at,
  attending,
  plusone
}) {
  let date = new Date(created_at)
  let formattedDate = date.toLocaleDateString('id-ID')
  return (
    <>
      <div tw="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg  md:w-2/3 shadow-xl hover:shadow-2xl border-none">
        <Badge attending={attending}>
          <strong> {attending ? 'Hadir' : 'Tidak Hadir'}</strong>
        </Badge>
        <div tw="flex flex-row">
          <img
            tw="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
            alt="Noob master's avatar"
            src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
          />

          <div tw="flex-col mt-1">
            <div tw="flex items-center flex-1 px-4 font-bold leading-tight">
              {name}
              <span tw="ml-2 text-left text-xs font-normal text-gray-500">
                {formattedDate}
              </span>
            </div>
            <div tw="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
              {info}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Badge = styled.span((attending) => [
  tw` text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:text-blue-300 float-right`,
  tw`hover:(scale-105)`,
  attending ? tw`bg-blue-100 text-blue-800` : 'bg-red-100 text-red-800'
])
