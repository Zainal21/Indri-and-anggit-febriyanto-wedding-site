import React from 'react'
import tw from 'twin.macro'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Flip from 'react-reveal/Flip'

export default function ImageGalleryCard() {
  return (
    <div tw="grid grid-cols-1 md:grid-cols-3 gap-4 md:m-0 m-5">
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </Flip>
      </div>
      <div>
        <Flip top cascade>
          <LazyLoadImage
            effect="blur"
            tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </Flip>
      </div>
    </div>
  )
}
