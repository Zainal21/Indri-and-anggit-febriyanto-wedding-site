import ReactAudioPlayer from 'react-audio-player'
import React from 'react'
import AudioPlayer from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'
import soundtrackBackground from '../../static/Menikahimu_Kahitna.mp3'

export default function SoundTrackPlayer() {
  return <ReactAudioPlayer src={soundtrackBackground} autoPlay controls />
  // return (
  //   <AudioPlayer
  //     autoPlay
  //     src={soundtrackBackground}
  //     loop={true}
  //     onPlay={(e) => console.log('onPlay')}
  //   />
  // )
}
