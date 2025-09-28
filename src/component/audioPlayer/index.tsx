import { useRef, useState } from "react"
import "./index.scss"
import { VolumeOnIcon } from "../../icons/volumeOn"
import { VolumeOffIcon } from "../../icons/volumeOff"

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    const audio = audioRef.current
    if (audio) {
      const newMutedState = !audio.muted
      audio.muted = newMutedState
      setIsMuted(newMutedState)
    }
  }

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}BGM.mp3`}
        autoPlay
        loop
        muted={isMuted}
      />
      <button onClick={toggleMute} className="control-button">
        {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </button>
    </div>
  )
}
