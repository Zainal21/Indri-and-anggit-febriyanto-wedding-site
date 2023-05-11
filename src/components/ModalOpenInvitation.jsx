import React from 'react'
import tw from 'twin.macro'
import Button from './Button'
import imageBackground from '../../static/image-1.jpeg'
import ImageAnimation from '../../static/image-2.png'
import Fade from 'react-reveal/Fade'

const ModalOpenInvitation = ({ setShowModal, recipient }) => {
  return (
    <div css={tw`fixed h-screen w-screen left-0 top-0 z-20`}>
      <div
        css={tw`bg-black opacity-50 h-screen w-screen cursor-pointer`}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        css={tw`absolute top-0 left-0 right-0 bottom-0 text-white flex justify-center items-center pointer-events-none`}
      >
        <div
          css={tw` text-black p-4 sm:p-10  w-full h-full font-poppin text-center pointer-events-auto`}
          style={{
            backgroundImage: `url(${imageBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <div className="flex">
            <div tw="grid md:grid-cols-2 grid-cols-1 text-center font-poppin text-gold-900 py-20">
              <Fade left>
                <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
                  <img
                    src={ImageAnimation}
                    alt="weeding"
                    style={{
                      width: '60%'
                    }}
                    tw="object-cover "
                  />
                </div>
              </Fade>
              <Fade right>
                <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
                  <div tw="text-4xl sm:text-5xl  text-gold-900 text-center  mt-5 md:mt-28">
                    Weeding Of
                  </div>
                  <div tw="text-3xl sm:text-5xl font-brittany  font-bold text-gold-900 text-center  mt-10">
                    Anggit Febriyanto & Indri
                  </div>
                  <div tw="text-xl mt-10">Kepada Bpk/Ibu/Saudara/i</div>
                  <div tw="font-bold sm:text-2xl text-xl my-5">
                    {recipient == undefined || recipient == ''
                      ? '-'
                      : recipient}
                  </div>
                  <div tw="text-lg"></div>
                  <div tw="px-12">
                    <div tw="flex"></div>
                  </div>
                  <button
                    tw="text-center font-sans font-semibold rounded-xl focus:outline-none bg-gold-900 text-white text-sm text-lg sm:py-4 sm:px-8 px-4 py-2"
                    onClick={() => setShowModal(false)}
                  >
                    Buka Undangan
                  </button>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOpenInvitation
