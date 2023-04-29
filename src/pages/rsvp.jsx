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

const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)

const Rsvp = () => {
  const [pin, setPin] = useQueryParam('pin', StringParam)
  const [showPerson, setShowPerson] = React.useState(false)
  const [showPlusOne, setShowPlusOne] = React.useState(false)
  const { register, errors, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    let loadingToast = toast.loading('Please wait...')
    if (!data.person) data.person = 0
    supabase
      .from('rsvp')
      .insert([data])
      .then(({ data, error }) => {
        reset()
        if (!error) {
          if (data[0]) {
            toast.success('Please check your email.', {
              id: loadingToast
            })
          }
          navigate('#schedule')
        } else {
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
          <GLink to="/">{/* <Logo /> */}</GLink>
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
          <div tw="text-4xl sm:text-5xl font-poppin font-bold text-gold-900 text-center mb-12">
            KONFIRMASI KEHADIRAN
          </div>
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
                  type="text"
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
                  <Button isPrimary={true}>Submit</Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div tw="py-24 bg-white relative" id="schedule">
        <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-20 mt-12">
            Wedding Schedule
          </div>

          <div tw="text-xl sm:text-2xl font-poppin font-bold text-gold-900 text-center mb-12 mt-12">
            Saturday, 20th March 2021
          </div>

          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900 py-20">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-3xl tracking-widest sm:mb-0 mb-12 font-bold">
              AKAD
              <br />
              NIKAH
            </div>
            <div tw="col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin">
              <div tw="text-lg">SATURDAY</div>
              <div tw="font-bold">20.05.2023</div>
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
              <div tw="font-bold">20.05.2023</div>
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
        </div>
      </div>
      {/* <div tw="py-24 bg-gold-100 relative">
        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-2 mt-12">
            Dress Code
          </div>
          <div tw="text-2xl font-poppin text-gold-900 text-center mb-12 mt-12 font-bold">
            Beach Formal
          </div>
          <div tw="grid grid-cols-2 gap-4 text-center font-poppin text-gold-900">
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-2xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              Ladies
              <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex font-normal">
                Formal Summer Dress
              </div>
            </div>
            <div tw="col-span-full sm:col-span-1 flex flex-col items-center justify-center text-2xl tracking-widest sm:mb-0 mb-12 font-bold font-poppin">
              Men
              <div tw="col-span-full sm:col-span-1 text-2xl tracking-wide font-poppin justify-center items-center flex font-normal">
                Summer Suit / Linen Shirt
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div tw="py-10 bg-white relative">
        <div tw="absolute -top-16 -right-16 w-48 h-48 bg-cover transform rotate-180 bg-gingko z-10" />

        <div
          className="container"
          tw="mx-auto items-center pb-12 px-4 sm:px-0 relative text-center"
        >
          <div tw="text-4xl sm:text-5xl font-brittany text-gold-900 text-center mb-12 mt-12">
            Location
          </div>
          <div tw="font-poppin font-semibold mb-2 text-lg">Rumah Kami</div>
          <div tw="font-poppin mb-4 text-xl">
            Sidorejo RT 1/12, Kaliboto, Mojogedang,
            <br />
            Karanganyar, Jawa Tengah, 57752 Indonesia
          </div>
          <iframe
            tw="text-center my-3 w-full p-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7910.236056685573!2d110.96955384528815!3d-7.562108434254441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a18dfded52f2f%3A0x5e072214c665e85f!2sNgemplak%2C%20Kaliboto%2C%20Kec.%20Mojogedang%2C%20Kabupaten%20Karanganyar%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1682414854947!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{
              border: 0
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div tw="flex mb-4 items-center justify-center">
            <div tw="py-4">
              <Link
                isPrimary={true}
                href="https://goo.gl/maps/nbgyi5VCDaChsd7q6"
              >
                Direction
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </Layout>
  )
}

export default Rsvp
