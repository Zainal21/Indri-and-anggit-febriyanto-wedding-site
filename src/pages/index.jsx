import React from 'react'
import tw from 'twin.macro'
import {
  Logo,
  Layout,
  Button,
  Link,
  Footer,
  CountDownTimer,
  CardBride,
  ImageGalleryCard,
  ModalOpenInvitation
} from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import { useQueryParam, StringParam } from 'use-query-params'
import Modal from '../components/Modal'
import toast, { Toaster } from 'react-hot-toast'
import imageBackground from '../../static/image-1.jpeg'

const App = () => {
  const [recipient, setRecipient] = useQueryParam('to', StringParam)
  const [showModal, setShowModal] = React.useState(false)
  const [showModalInvitation, setShowModalInvitation] = React.useState(true)
  const [showGiving, setShowGiving] = React.useState(false)

  const [text, setText] = React.useState('Hello World!')

  const handleCopy = () => {
    console.log('test')
    navigator.clipboard
      .writeText(text)
      .then(function () {
        toast.success('Success copy to clipboard.')
      })
      .catch((err) => {
        toast.error(err)
      })
  }

  return (
    <Layout
      css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}
      style={{
        backgroundImage: `url(${imageBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {showModalInvitation ? (
        <ModalOpenInvitation
          setShowModal={setShowModalInvitation}
          recipient={recipient}
        />
      ) : null}
      <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block mt-24">{/* <Logo /> */}</div>
        <div tw="w-full sm:w-3/5 -mt-8">
          <img src={GroomsBride} />
        </div>

        <div tw="w-20 h-20 absolute ml-40 top-32">
          <Player
            autoplay={true}
            loop={true}
            controls={false}
            src={Butterfly}
            style={{ height: '100%', width: '100%' }}
          ></Player>
        </div>
      </div>
      {/* pembukaan + count down timer*/}
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </div>
          <div tw="text-center text-lg">
            Assalamu’alaikum Warahmatullahi Wabarakatuh Maha suci Allah yang
            telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
            perkenankanlah kami menikahkan putra-putri kami :
          </div>
          <CardBride></CardBride>
        </div>
      </div>
      {/* weeding shedule */}
      <div tw="py-24 bg-white relative">
        <div tw="absolute left-0 right-0 h-10 bg-white" style={{ top: -40 }} />
        <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
            Wedding Schedule
          </div>

          <div tw="text-center text-lg">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              AKAD
              <br />
              NIKAH
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.5.2023</div>
              <div tw="text-lg">15.30 WIB</div>
              <div tw="text-lg mb-4">16.30 SGT</div>
              <div tw="px-12">
                <div tw="flex">
                  <Link isSecondary={true} href="#">
                    Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              RESEPSI
              <br />
              PERNIKAHAN
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.5.2023</div>
              <div tw="text-lg">15.30 WIB</div>
              <div tw="text-lg mb-4">16.30 SGT</div>
              <div tw="px-12">
                <div tw="flex">
                  <Link isSecondary={true} href="#">
                    Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div tw="grid grid-cols-1 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              KONFIRMASI KEHADIRAN
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
              <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
              <div tw="px-12">
                <Button isSecondary={true} onClick={() => setShowModal(true)}>
                  Konfirmasi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our galleries */}
      <div tw="py-24 bg-white bg-opacity-30 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
            Our Gallery Story
          </div>
          {/* <div
            tw="mx-auto w-full leading-loose font-sans p-1"
            style={{ maxWidth: 640 }}
          >
          </div> */}
          <ImageGalleryCard></ImageGalleryCard>
        </div>
      </div>
      {/* eletcronic giving */}
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />

        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-20 mt-12">
            Wedding Love Gift
          </div>
          <div tw="text-center text-lg mb-10">
            Doa restu anda merupakan karunia yang sangat berarti bagi kami.
            Mungkin karena jarak, waktu ataupun keadaan yang menghalangi untuk
            ikut hadir dalam momen bahagia kami, dan jika memberi adalah
            ungkapan terima kasih anda, maka anda dapat memberikan kado dengan
            cara klik salin mengirimkan kado/hadiah secara cashless.
          </div>
          <Button isSecondary={true} onClick={() => setShowGiving(!showGiving)}>
            Electronic Giving
          </Button>
          {showGiving ? (
            <>
              <div
                tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                style={{ maxWidth: 640 }}
              >
                <div tw="text-xl my-2">Transfer via Qris</div>
                <div tw="font-bold text-2xl my-2">0882616263626</div>
                <div tw="mb-4 font-bold  text-xl my-2">Anggit Febrianto</div>
                <img src={QRImage} tw="mx-auto w-80 mb-16 rounded-lg my-2" />

                <div tw="text-xl my-2">Transfer via BCA</div>
                <div tw="font-bold text-2xl my-2">8283991838</div>
                <div tw="font-bold text-xl my-2">Anggit Febrianto</div>
                <button
                  tw="border-2 mb-16 border-gold-900 text-gold-900 font-sans font-semibold px-8 py-4 rounded-xl focus:outline-none hover:(scale-105) transform transition-transform duration-75"
                  onClick={handleCopy}
                >
                  Copy To Clipboard
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>
      {/* surat ar-rumn */}
      {/* our galleries */}
      <div tw="py-24 bg-white bg-opacity-30 relative">
        <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-lg sm:text-2xl text-gold-900 text-center mb-24 mt-12">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir ~ QS.
            Ar-Rum Ayat 21 ~
          </div>
        </div>
      </div>
      {/* penutup */}
      <div tw="py-24 bg-white relative">
        <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
        >
          <div tw="text-center text-lg mb-10">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas
            kehadiran dan doa restunya, kami mengucapkan terima kasih.
            Jazakumullahu Khairan
          </div>
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-2 mt-12">
            Wassalamu'alaikum Wr. Wb.
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </Layout>
  )
}

export default App
