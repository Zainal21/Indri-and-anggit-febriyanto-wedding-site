import React, { useRef } from 'react'

const MusicPlayer = () => {
  return (
    <audio id="song" loop>
      <source
        src="https://digimo.id/wp-content/uploads/2022/06/Shane-Filan-Beautiful-In-White-Official-Video.mp3"
        type="audio/mp3"
      />
    </audio>
  )
}

export default MusicPlayer
