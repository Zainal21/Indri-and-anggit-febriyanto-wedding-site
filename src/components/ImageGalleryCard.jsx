import React from 'react'
import tw from 'twin.macro'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function ImageGalleryCard() {
  return (
    <div tw="grid-cols-3 p-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
      <div tw="w-full rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
      <div tw="w-full col-span-2 row-span-2 rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
      <div tw="w-full rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
      <div tw="w-full rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
      <div tw="w-full rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
      <div tw="w-full rounded">
        <LazyLoadImage
          effect="blur"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
          alt="image"
        />
      </div>
    </div>
  )
}
