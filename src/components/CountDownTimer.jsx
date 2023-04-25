import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'

export default function CountDownTimer() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2023-05-01T00:00:00') // Change this to your target date
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

  return (
    <div tw="grid grid-cols-4 gap-4 justify-items-center">
      <div tw="bg-gray-200 rounded-lg text-center">
        <div tw="text-xl font-bold">Days</div>
        <div tw="text-4xl font-bold">{countdown.days}</div>
      </div>
      <div tw="bg-gray-200 rounded-lg text-center">
        <div tw="text-xl font-bold">Hours</div>
        <div tw="text-4xl font-bold">{countdown.hours}</div>
      </div>
      <div tw="bg-gray-200 rounded-lg text-center">
        <div tw="text-xl font-bold">Minutes</div>
        <div tw="text-4xl font-bold">{countdown.minutes}</div>
      </div>
      <div tw="bg-gray-200 rounded-lg text-center">
        <div tw="text-xl font-bold">Seconds</div>
        <div tw="text-4xl font-bold">{countdown.seconds}</div>
      </div>
    </div>
  )
}
