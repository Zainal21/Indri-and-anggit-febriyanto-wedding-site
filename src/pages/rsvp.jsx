import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Link, Button, Footer } from '../components'
import { navigate, Link as GLink } from 'gatsby'
import { useQueryParam, StringParam } from 'use-query-params'
import { Player } from '@lottiefiles/react-lottie-player'
import toast, { Toaster } from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import Butterfly from '../images/butterfly.json'
import { createClient } from '@supabase/supabase-js'
import Fade from 'react-reveal/Fade'

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Rsvp = () => {
  const [pin, setPin] = useQueryParam('pin', StringParam)
  const [showPerson, setShowPerson] = React.useState(false)
  const [showPlusOne, setShowPlusOne] = React.useState(false)
  const [loading, isLoading] = React.useState(false)
  const { register, errors, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    isLoading(true)
    let loadingToast = toast.loading('Please wait...')
    if (!data.person) data.person = 0
    supabase
      .from('rsvp')
      .insert([data])
      .then(({ data, error }) => {
        isLoading(false)

        reset()
        if (!error) {
          if (data[0]) {
            toast.success('Terimakasih. sudah mengisi form kehadiran', {
              id: loadingToast
            })
          }
          navigate('#schedule')
        } else {
          isLoading(false)
          toast.error(error.message, {
            id: loadingToast
          })
        }
      })
  }

  React.useEffect(() => {
    if (pin !== process.env.GATSBY_PIN_CODE) {
      navigate('/')
    }
    window.scrollTo(0, 0)
  }, [])

  const changeRadio = (event) => {
    const { name, value } = event.target
    if (value === 'false') {
      setShowPerson(false)
      setShowPlusOne(false)
    } else {
      setShowPerson(true)
    }
  }

  return (
    <Layout
      css={tw`min-h-screen bg-gold-100  bg-gold-100 overflow-x-hidden relative`}
    >
      <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />

      <div
        className="container max-w-screen-md"
        tw="mx-auto flex flex-col items-center relative"
      >
        <div tw="p-5 block my-10">
          <GLink to="/">
            <Logo />
          </GLink>
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

      <div tw="py-24 bg-gold-100 relative">
        <div className="container" tw="mx-auto items-center pb-12 px-4 sm:px-0">
          <Fade left>
            <div tw="text-4xl sm:text-5xl font-poppin font-bold text-gold-900 text-center mb-12">
              KONFIRMASI KEHADIRAN
            </div>
          </Fade>
          <Fade right>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div tw="font-semibold font-poppin text-lg">
                <div tw="mb-5 ">
                  <label>Full Name / Nama Lengkap</label>
                  <input
                    name="name"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="text"
                    aria-label="Full Name (Nama Lengkap)"
                    placeholder="Full Name (Nama Lengkap)"
                  />
                  <div tw="text-base text-gold-900">
                    {errors.name && 'Nama Tidak Boleh Kosong'}
                  </div>
                </div>
                <div tw="mb-5 ">
                  <label>Email</label>
                  <input
                    name="email"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="email"
                    aria-label="Email"
                    placeholder="Email"
                  />
                  <div tw="text-base text-gold-900">
                    {errors.name && 'Email Tidak Boleh Kosong'}
                  </div>
                </div>
                <div tw="mb-5 ">
                  <label>WhatsApp Number / Nomor WhatsApp</label>
                  <input
                    name="phone"
                    ref={register({ required: true })}
                    css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                    type="number"
                    aria-label="WhatsApp Number (Nomor WhatsApp)"
                    placeholder="WhatsApp Number (Nomor WhatsApp)"
                  />
                  <div tw="text-base text-gold-900">
                    {errors.name && 'Nomor WhatsApp Tidak Boleh Kosong'}
                  </div>
                </div>
                <div tw="mb-5 flex flex-col">
                  <label tw="mb-4">
                    <input
                      type="radio"
                      tw="form-radio"
                      name="attending"
                      value="true"
                      ref={register({ required: true })}
                      onChange={(e) => changeRadio(e)}
                    />
                    <span tw="ml-2">Ya, saya akan menghadiri pernikahan</span>
                  </label>
                  <label tw="mb-4">
                    <input
                      type="radio"
                      tw="form-radio"
                      name="attending"
                      value="false"
                      ref={register({ required: true })}
                      onChange={(e) => changeRadio(e)}
                    />
                    <span tw="ml-2">
                      Maaf, saya tidak bisa menghadiri pernikahan
                    </span>
                  </label>
                  <div tw="text-base text-gold-900">
                    {errors.attending && 'Silakan pilih kehadiran Anda'}
                  </div>
                </div>
                {showPerson ? (
                  <div tw="mb-5">
                    <select
                      css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 bg-white rounded-md p-4 mb-4 appearance-none`}
                      name="person"
                      ref={register({ validate: (val) => val != '' })}
                      onChange={(e) => {
                        if (e.target.value === '2') {
                          setShowPlusOne(true)
                        } else {
                          setShowPlusOne(false)
                        }
                      }}
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 (Dengan Partner)</option>
                    </select>
                    <div tw="text-base text-gold-900">
                      {errors.name && 'Silakan pilih jumlah orang'}
                    </div>
                  </div>
                ) : null}

                {showPlusOne ? (
                  <div tw="mb-10 ">
                    <label>Nama Lengkap Partner</label>
                    <input
                      name="plusone"
                      ref={register({ required: true })}
                      css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                      type="text"
                      aria-label="Nama Lengkap Partner Anda"
                      placeholder="Nama Lengkap Partner Anda"
                    />
                    <div tw="text-base text-gold-900">
                      {errors.plusone && 'Nama Partner Anda Tidak Boleh Kosong'}
                    </div>
                  </div>
                ) : null}

                {showPerson ? (
                  <div tw="mb-5 ">
                    <label>Kirim Ucapan</label>
                    <input
                      type="textarea"
                      name="info"
                      ref={register({ required: false })}
                      css={tw`focus:ring-1 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md p-4 mb-4`}
                      aria-label="What should we know"
                      placeholder="E.g: i am allergic to nuts, i will bring a baby, etc"
                    />
                    <div tw="text-base text-gold-900">
                      {errors.info && 'What should we know Tidak Boleh Kosong'}
                    </div>
                  </div>
                ) : null}
                <div tw="flex mb-4 items-center justify-center">
                  <div tw="py-4">
                    <Button isPrimary={true} disabled={loading ? true : false}>
                      Konfirmasi
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Fade>
        </div>
      </div>
      <div tw="py-24 bg-white relative" id="schedule">
        <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <Fade top>
            <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-20 mt-12">
              Wedding Schedule
            </div>
          </Fade>
          <Fade bottom>
            <div tw="text-xl sm:text-2xl font-poppin font-bold text-gold-900 text-center mb-12 mt-12">
              SENIN, 10 Juli 2023
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
                    <Link
                      isSecondary={true}
                      target="_blank"
                      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Weeding+Indri+Febryani+dan+Anggit+Febriyanto&location=Karanganyar%2C+Jawa+Tengah&dates=20230709T221600Z%2F20230710T011700Z"
                    >
                      Simpan Ke Kalender
                    </Link>
                  </div>
                  <div tw="flex">
                    <Link
                      isSecondary={true}
                      href="https://goo.gl/maps/Km2E8c1oyWFTXvhw7"
                      target="_blank"
                    >
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
                    <Link
                      isSecondary={true}
                      href="https://www.google.com/calendar/render?action=TEMPLATE&text=Weeding+Indri+Febryani+dan+Anggit+Febriyanto&location=Karanganyar%2C+Jawa+Tengah&dates=20230709T221600Z%2F20230710T011700Z"
                      target="_blank"
                    >
                      Simpan Ke Kalender
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div tw="py-10 bg-white relative">
        <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
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
            <div tw="font-poppin font-semibold mb-2 text-lg">Rumah Kami</div>
            <div tw="font-poppin mb-4 text-xl">
              Sidorejo RT 1/12, Kaliboto, Mojogedang,
              <br />
              Karanganyar, Jawa Tengah, 57752 Indonesia
            </div>
            <iframe
              tw="text-center my-3 w-full p-10"
              width={400}
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
                  Penunjuk Lokasi
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <Footer />
      <Toaster />
    </Layout>
  )
}

export default Rsvp
