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
      <div tw="flex-col my-2 w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg  md:w-2/3 shadow-xl hover:shadow-2xl border-none bg-gray-100">
        <Badge attending={attending}>
          <strong> {attending ? 'Hadir' : 'Tidak Hadir'}</strong>
        </Badge>
        <div tw="flex flex-row">
          <div tw="flex-col mt-1">
            <div tw="flex items-center flex-1 px-4 font-bold leading-tight">
              <p tw="text-base">{name}</p>
              <span tw="ml-2 text-left text-xs font-normal text-gray-500">
                {formattedDate}
              </span>
            </div>
            <div tw="flex-1 px-2 ml-2 mt-3 text-base font-bold leading-loose text-gray-600">
              &quot;{info}&quot;
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Badge = styled.span((attending) => [
  tw` text-xs font-bold mr-2 px-2.5 py-0.5 rounded float-right`,
  tw`hover:(scale-105)`,
  attending ? tw`bg-blue-100 text-blue-800` : 'bg-red-100 text-red-800'
])
