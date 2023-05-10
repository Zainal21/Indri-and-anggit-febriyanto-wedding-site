import React from 'react'
import tw from 'twin.macro'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Flip from 'react-reveal/Flip'
import Image1 from '../../static/images/galleries1.jpg'
import Image2 from '../../static/images/galleries2.jpg'
import Image3 from '../../static/images/galleries3.jpg'
import Image4 from '../../static/images/galleries4.jpg'
import { SRLWrapper } from 'simple-react-lightbox'

export default function ImageGalleryCard() {
  return (
    <SRLWrapper>
      <div tw="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div tw="grid gap-4">
          <Flip top>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image3} alt="" />
            </div>
          </Flip>
          <Flip top>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image4} alt="" />
            </div>
          </Flip>
          <Flip bottom>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image2} alt="" />
            </div>
          </Flip>
        </div>
        <div tw="grid gap-4">
          <Flip top>
            <div>
              <img
                tw="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                alt=""
              />
            </div>
          </Flip>

          <Flip top>
            <div>
              <img
                tw="h-auto max-w-full rounded-lg"
                src="hsttps://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                alt=""
              />
            </div>
          </Flip>
          <Flip bottom>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image2} alt="" />
            </div>
          </Flip>
        </div>
        <div tw="grid gap-4">
          <Flip bottom>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image3} alt="" />
            </div>
          </Flip>
          <Flip bottom>
            <div>
              <img tw="h-auto max-w-full rounded-lg" src={Image4} alt="" />
            </div>
          </Flip>
          <div>
            <img tw="h-auto max-w-full rounded-lg" src={Image2} alt="" />
          </div>
        </div>
      </div>
    </SRLWrapper>
  )
  // <div tw="grid grid-cols-1 md:grid-cols-3 gap-4 md:m-0 m-5">
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  //   <div>
  //     <Flip top>
  //       <LazyLoadImage
  //         effect="blur"
  //         tw="h-auto max-w-full rounded-lg transition ease-in-out ease-in-out hover:-translate-y-1"
  //         src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
  //         alt=""
  //       />
  //     </Flip>
  //   </div>
  // </div>
}
