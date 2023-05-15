import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import Fade from 'react-reveal/Fade'

export default function CountDownTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2023-07-10T00:00:00') // Change this to your target date
    const intervalId = setInterval(() => {
      const now = new Date()
      const timeDiff = targetDate - now

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((timeDiff / 1000 / 60) % 60)
      const seconds = Math.floor((timeDiff / 1000) % 60)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (countdown.days > 0) {
    return (
      <div tw="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center">
        <Fade bottom opposite cascade>
          <div tw="bg-gold-100 rounded-xl text-center p-10 shadow hover:shadow-md w-36">
            <div tw="text-xl font-bold">Days</div>
            <div tw="text-4xl font-bold">{countdown.days}</div>
          </div>
        </Fade>
        <Fade bottom opposite cascade>
          <div tw="bg-gold-100 rounded-xl text-center p-10 shadow hover:shadow-md w-36">
            <div tw="text-xl font-bold">Hours</div>
            <div tw="text-4xl font-bold">{countdown.hours}</div>
          </div>
        </Fade>
        <Fade bottom opposite cascade>
          <div tw="bg-gold-100 rounded-xl text-center p-10 shadow hover:shadow-md w-36">
            <div tw="text-xl font-bold">Minutes</div>
            <div tw="text-4xl font-bold">{countdown.minutes}</div>
          </div>
        </Fade>
        <Fade bottom opposite cascade>
          <div tw="bg-gold-100 rounded-xl text-center p-10 shadow hover:shadow-md w-36">
            <div tw="text-xl font-bold">Seconds</div>
            <div tw="text-4xl font-bold">{countdown.seconds}</div>
          </div>
        </Fade>
      </div>
    )
  }
  return null
}
