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
  ModalOpenInvitation,
  CommentCard
} from '../components'
import GroomsBride from '../images/groomsbride.png'
import QRImage from '../images/qrocbc.png'
import { Player } from '@lottiefiles/react-lottie-player'
import Butterfly from '../images/butterfly.json'
import { useQueryParam, StringParam } from 'use-query-params'
import Modal from '../components/Modal'
import toast, { Toaster } from 'react-hot-toast'
import imageBackground from '../../static/image-1.jpeg'
import { createClient } from '@supabase/supabase-js'
import Fade from 'react-reveal/Fade'
import 'react-image-lightbox/style.css'
import Flip from 'react-reveal/Flip'
import Bounce from 'react-reveal/Bounce'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const App = () => {
  const [recipient, setRecipient] = useQueryParam('to', StringParam)
  const [gretting, setGreeting] = React.useState([])
  const [showModal, setShowModal] = React.useState(false)
  const [loading, setloading] = React.useState(true)
  const [showModalInvitation, setShowModalInvitation] = React.useState(true)
  const [showGiving, setShowGiving] = React.useState(false)
  const [showGretting, setShowGretting] = React.useState(false)

  const [text, setText] = React.useState('')

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(function () {
        toast.success('Success copy to clipboard.')
      })
      .catch((err) => {
        toast.error(err)
      })
  }

  const fetchGreeting = async () => {
    let { data, error } = await supabase.from('rsvp').select('*')
    setloading(false)
    if (error) {
      toast.error(error)
      return
    }
    setGreeting(data)
  }

  React.useEffect(() => {
    if (showGretting == true) {
      fetchGreeting()
    }
  }, [showGretting])

  return (
    <Layout
      css={tw`min-h-screen bg-gold-100 overflow-hidden relative`}
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.1)), url(${imageBackground}) center center / cover no-repeat`
      }}
    >
      {showModalInvitation ? (
        <ModalOpenInvitation
          setShowModal={setShowModalInvitation}
          recipient={recipient}
        />
      ) : (
        <>
          <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
          <div
            className="container"
            tw="mx-auto flex flex-col items-center relative"
          >
            <div tw="p-2 block">
              <Fade cascade top>
                <Logo />
              </Fade>
            </div>
            <div tw="w-full -mt-20 mb-5">
              <Fade cascade bottom>
                <img src={GroomsBride} tw="mb-5" />
              </Fade>
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
            <div
              tw="absolute left-0 right-0 h-10 bg-white"
              style={{ top: -40 }}
            />
            <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
            <div
              className="container"
              tw="mx-auto items-center pb-12 px-4 sm:px-0"
            >
              <Fade top>
                <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </div>
              </Fade>
              <Fade bottom>
                <div tw="text-center text-lg">
                  Assalamu’alaikum Warahmatullahi Wabarakatuh Maha suci Allah
                  yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya
                  Allah, perkenankanlah kami menikahkan putra-putri kami :
                </div>
              </Fade>
              <Fade bottom>
                <CardBride />
              </Fade>
              <CountDownTimer />
            </div>
          </div>
          {/* weeding shedule */}
          <div tw="py-24 bg-white relative">
            <div
              tw="absolute left-0 right-0 h-10 bg-white"
              style={{ top: -40 }}
            />
            <div tw="absolute -top-36 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
            <div
              className="container"
              tw="mx-auto items-center pb-12 px-4 sm:px-0"
            >
              <Fade top>
                <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12">
                  Wedding Schedule
                </div>
              </Fade>
              <Fade bottom>
                <div tw="text-center text-lg">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                </div>
              </Fade>
              <div tw="grid md:grid-cols-2 grid-cols-1 gap-4 text-center font-poppin text-gold-900 py-20">
                <Fade left>
                  <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
                    AKAD
                    <br />
                    NIKAH
                  </div>
                </Fade>
                <Fade right>
                  <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
                    <div tw="text-lg">SENIN</div>
                    <div tw="font-bold my-2">10 Juli 2023</div>
                    <div tw="text-lg my-1 font-semibold text-center">
                      Bertempat di{' '}
                      <span tw="font-bold">
                        Ngablak RT04/TW 06, Karangmojo, Tasikmadu
                      </span>
                    </div>
                    <div tw="px-12">
                      <div tw="flex my-2">
                        <Link isSecondary={true} href="#">
                          Tambahkan Ke Kalender
                        </Link>
                      </div>
                      <div tw="flex">
                        <Link isSecondary={true} href="#">
                          Penunjuk Lokasi
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div tw="grid md:grid-cols-2 grid-cols-1 gap-4 text-center font-poppin text-gold-900 py-20">
                <Fade left>
                  <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
                    RESEPSI
                    <br />
                    PERNIKAHAN
                  </div>
                </Fade>
                <Fade right>
                  <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
                    <div tw="text-lg">SENIN</div>
                    <div tw="font-bold  my-2">10 Juli 2023</div>
                    <div tw="text-lg hidden">-</div>
                    <div tw="px-12">
                      <div tw="flex">
                        <Link isSecondary={true} href="#">
                          Tambahkan Ke Kalender
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
              <div tw="py-10 bg-white relative">
                <div
                  className="container"
                  tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
                >
                  <Fade top>
                    <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
                      Reception Location
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div tw="font-poppin font-semibold mb-2 text-lg">
                      Rumah Kami
                    </div>
                    <div tw="font-poppin mb-4 text-xl">
                      Sidorejo RT 1/12, Kaliboto, Mojogedang,
                      <br />
                      Karanganyar, Jawa Tengah, 57752 Indonesia
                    </div>
                    <iframe
                      tw="text-center my-3 w-full"
                      width={100}
                      height={600}
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d247.19567255734032!2d110.9774784500273!3d-7.5607189079954775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMzMnMzguNiJTIDExMMKwNTgnNDAuMyJF!5e0!3m2!1sid!2sid!4v1683722852012!5m2!1sid!2sid"
                      style={{
                        border: 0
                      }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Fade>
                  <Fade bottom>
                    <div tw="flex mb-4 items-center justify-center">
                      <div tw="py-4">
                        <Link
                          isSecondary={true}
                          target="_blank"
                          href="https://goo.gl/maps/2zp6CD6yPZ73MmUs6"
                        >
                          Direction
                        </Link>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div tw="grid grid-cols-1 gap-4 text-center font-poppin text-gold-900 py-20">
                <Fade top>
                  <div tw="col-span-full sm:col-span-1 flex items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
                    KONFIRMASI KEHADIRAN & KIRIM UCAPAN
                  </div>
                </Fade>
                <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest">
                  <div tw="font-brittany text-4xl mb-8">Invitation Only</div>
                  <div tw="px-12">
                    <Fade cascade bottom>
                      <Button
                        isSecondary={true}
                        onClick={() => setShowModal(true)}
                      >
                        Konfirmasi
                      </Button>
                    </Fade>
                    <Fade cascade bottom>
                      <Button
                        isSecondary={true}
                        onClick={() => setShowGretting(!showGretting)}
                      >
                        LIhat Semua Daftar Ucapan/Pesan
                      </Button>
                    </Fade>
                    {showGretting ? (
                      <>
                        <div tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center">
                          <div
                            style={{
                              height: '20rem',
                              overflowY: 'scroll',
                              overflowX: 'scroll'
                            }}
                          >
                            {loading == true && 'Sedang Memuat Data....'}
                            {gretting.length < 1 &&
                              loading === false &&
                              'Tidak Ada Data Yang tersedia'}
                            {gretting.map((item) => (
                              <CommentCard
                                name={item.name}
                                attending={item.attending}
                                plusone={item.plusone}
                                info={item.info}
                                created_at={item.created_at}
                                key={item.id}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    ) : null}
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
              <Fade bottom>
                <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-24 mt-12">
                  Our Gallery Story
                </div>
              </Fade>
            </div>
            <div className="container" tw="mx-auto items-center">
              <ImageGalleryCard />
            </div>
          </div>
          {/* eletcronic giving */}
          <div tw="py-24 bg-white relative">
            <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
            <div
              className="container"
              tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
            >
              <Fade left>
                <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-20 mt-12">
                  Wedding Love Gift
                </div>
              </Fade>
              <Fade right>
                <div tw="text-center text-lg mb-10">
                  Doa restu anda merupakan karunia yang sangat berarti bagi
                  kami. Mungkin karena jarak, waktu ataupun keadaan yang
                  menghalangi untuk ikut hadir dalam momen bahagia kami, dan
                  jika memberi adalah ungkapan terima kasih anda, maka anda
                  dapat memberikan kado dengan cara klik salin mengirimkan
                  kado/hadiah secara cashless.
                </div>
              </Fade>
              <Fade bottom>
                <Button
                  isSecondary={true}
                  onClick={() => setShowGiving(!showGiving)}
                >
                  Electronic Giving
                </Button>
              </Fade>
              {showGiving ? (
                <>
                  <Fade bottom>
                    <div
                      tw="mx-auto w-full p-4 leading-loose font-sans items-center justify-center text-center"
                      style={{ maxWidth: 640 }}
                    >
                      <div tw="text-xl my-2">Transfer via Qris</div>
                      <div tw="font-bold text-2xl my-2">0882616263626</div>
                      <div tw="mb-4 font-bold  text-xl my-2">
                        Anggit Febrianto
                      </div>
                      <img
                        src={QRImage}
                        tw="mx-auto w-80 mb-16 rounded-lg my-2"
                      />
                      <div tw="text-xl my-2">Transfer via BCA</div>
                      <div tw="font-bold text-2xl my-2">8283991838</div>
                      <div tw="font-bold text-xl my-2">Anggit Febrianto</div>
                      <button
                        tw="border-2 mb-16 border-gold-900 text-gold-900 font-sans font-semibold px-8 py-4 rounded-xl focus:outline-none hover:(scale-105) transform transition-transform duration-75 hover:bg-gold-900 hover:text-white"
                        onClick={handleCopy}
                      >
                        Copy To Clipboard
                      </button>
                    </div>
                  </Fade>
                </>
              ) : null}
            </div>
          </div>
          {/* surat ar-rum */}
          <div tw="py-24 bg-white bg-opacity-30 relative">
            <div tw="absolute -top-24 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko" />
            <div
              className="container"
              tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
            >
              <Bounce right>
                <div tw="text-lg sm:text-2xl text-gold-900 text-center mb-24 mt-12">
                  Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                  menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                  agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                  menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                  yang demikian itu benar-benar terdapat tanda-tanda (kebesaran
                  Allah) bagi kaum yang berpikir <br />
                  <span tw="font-bold">~ QS. Ar-Rum Ayat 21 ~</span>
                </div>
              </Bounce>
            </div>
          </div>
          {/* penutup */}
          <div tw="py-24 bg-white relative">
            <div tw="absolute -top-24 -left-16 w-48 h-48 bg-cover transform bg-gingko" />
            <div
              className="container"
              tw="mx-auto items-center pb-12 px-4 sm:px-0 relative"
            >
              <Flip bottom>
                <div tw="text-center text-lg mb-10">
                  Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
                  Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                  Atas kehadiran dan doa restunya, kami mengucapkan terima
                  kasih. Jazakumullahu Khairan
                </div>
                <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-2 mt-12">
                  Wassalamu'alaikum Wr. Wb.
                </div>
              </Flip>
            </div>
          </div>
          <Footer />
          <Toaster />
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
        </>
      )}
    </Layout>
  )
}

export default App
