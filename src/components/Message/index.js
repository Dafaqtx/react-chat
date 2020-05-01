import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { covertCurrentTime } from 'utils/helpers'

import { CheckMarker, Time } from 'components'
import { voiceDiagramIcon, playIcon, pauseIcon } from 'assets/icons'

import './Message.scss'

const Message = ({
  avatar,
  user,
  text,
  date,
  attachments,
  audioFile,
  isMine,
  isReaded,
  isTyping,
}) => {
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
    <div
      className={classNames('Message', {
        'Message--my': isMine,
        'Message--typing': isTyping,
        'Message--audio': audioFile !== '',
        'Message--image': attachments.length === 1,
      })}>
      <div className="Message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div className="Message__info">
        <div className="Message__content">
          {(audioFile || text || isTyping) && (
            <div className="Message__bubble">
              {text && <p className="Message__text">{text}</p>}

              {isTyping && (
                <div className="Message__typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

              {audioFile && (
                <div className="Message__audio">
                  <audio src={audioFile} ref={audioRef} preload="auto" />
                  <div
                    className="Message__audio-progress"
                    style={{ width: `${audioProgress}%` }}></div>
                  <div className="Message__audio-info">
                    <div className="Message__audio-btn">
                      <button type="button" onClick={() => togglePlay()}>
                        <img
                          src={isPlaying ? pauseIcon : playIcon}
                          alt={isPlaying ? 'Pause' : 'Play'}
                        />
                      </button>
                    </div>
                    <div className="Message__audio-diagram">
                      <img src={voiceDiagramIcon} alt="Voice diagram" />
                    </div>
                    <span className="Message__audio-duration">
                      {covertCurrentTime(audioCurrentTime)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
          {!!attachments.length && (
            <ul className="Message__attachments">
              {attachments.map((attach, index) => (
                <li className="Message__attachments-item" key={index}>
                  <img src={attach.url} alt={attach.fileName} />
                </li>
              ))}
            </ul>
          )}
          {date && <Time value={date} />}
        </div>
      </div>
      {isMine && <CheckMarker checked={isReaded} />}
    </div>
  )
}

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.number,
  attachments: PropTypes.array,
  audioFile: PropTypes.string,
  isMine: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
}

Message.defaultProps = {
  user: {},
  attachments: [],
  audioFile: '',
  isMine: false,
  isReaded: false,
  isTyping: false,
}

export default Message
