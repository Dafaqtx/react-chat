import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { covertCurrentTime } from 'utils/helpers'

import { voiceDiagramIcon, playIcon, pauseIcon } from 'assets/icons'

import './MessageAudio.scss'

const MessageAudio = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioCurrentTime, setAudioCurrentTime] = useState(0)
  const [audioProgress, setAudioProgress] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener(
        'playing',
        () => {
          setIsPlaying(true)
        },
        false
      )

      audioRef.current.addEventListener(
        'ended',
        () => {
          setIsPlaying(false)
          setAudioProgress(0)
          setAudioCurrentTime(0)
        },
        false
      )

      audioRef.current.addEventListener(
        'pause',
        () => {
          setIsPlaying(false)
        },
        false
      )

      audioRef.current.addEventListener(
        'timeupdate',
        () => {
          const currentTime = audioRef.current.currentTime
          const duration = (audioRef.current && audioRef.current.duration) || 0

          setAudioCurrentTime(currentTime)
          setAudioProgress((currentTime / duration) * 100)
        },
        false
      )
    }
  }, [])
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
  }
  return (
    <div className="MessageAudio">
      <audio src={src} ref={audioRef} preload="auto" />
      <div
        className="MessageAudio__progress"
        style={{ width: `${audioProgress}%` }}></div>
      <div className="MessageAudio__info">
        <div className="MessageAudio__btn">
          <button type="button" onClick={() => togglePlay()}>
            <img
              src={isPlaying ? pauseIcon : playIcon}
              alt={isPlaying ? 'Pause' : 'Play'}
            />
          </button>
        </div>
        <div className="MessageAudio__diagram">
          <img src={voiceDiagramIcon} alt="Voice diagram" />
        </div>
        <span className="MessageAudio__duration">
          {covertCurrentTime(audioCurrentTime)}
        </span>
      </div>
    </div>
  )
}

MessageAudio.propTypes = {
  src: PropTypes.string.isRequired,
}

export default MessageAudio
