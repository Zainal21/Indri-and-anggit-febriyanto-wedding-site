import React from 'react'
import tw from 'twin.macro'
import Fade from 'react-reveal/Fade'
import Image5 from '../../static/images/galleries5.png'
import Image2 from '../../static/images/galleries2.jpg'
import Image3 from '../../static/images/galleries3.jpg'
import Image4 from '../../static/images/galleries4.jpg'
import Image6 from '../../static/images/galleries-6.png'
import Image7 from '../../static/images/galleries-new1.png'
import Image8 from '../../static/images/galleries-new2.jpeg'
import Image9 from '../../static/images/galleries-new3.png'
import Image10 from '../../static/images/galleries-new4.png'
import Image11 from '../../static/images/galleries-new5.jpeg'
import { SRLWrapper } from 'simple-react-lightbox'

export default function ImageGalleryCard() {
  return (
    <SRLWrapper>
      <div tw="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div tw="grid gap-4">
          <Fade top>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image3}
                alt=""
              />
            </div>
          </Fade>
          <Fade right>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image4}
                alt=""
              />
            </div>
          </Fade>
          <Fade left>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image2}
                alt=""
              />
            </div>
          </Fade>
        </div>
        <div tw="grid gap-4">
          <Fade right>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image6}
                alt=""
              />
            </div>
          </Fade>

          <Fade left>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image5}
                alt=""
              />
            </div>
          </Fade>
          <Fade bottom>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image10}
                alt=""
              />
            </div>
          </Fade>
        </div>
        <div tw="grid gap-4">
          <Fade left>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image9} // image landscape
                alt=""
              />
            </div>
          </Fade>
          <Fade left>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image8}
                alt=""
              />
            </div>
          </Fade>
          <Fade right>
            <div className="photo">
              <img
                className="image-bride"
                tw="h-auto max-w-full rounded-lg"
                src={Image7}
                alt=""
              />
            </div>
          </Fade>
        </div>
      </div>
    </SRLWrapper>
  )
}
