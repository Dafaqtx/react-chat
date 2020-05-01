import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  Avatar,
  MessageAudio,
  MessageTyping,
  MessageAttachments,
  CheckMarker,
  Time,
} from 'components'

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
  return (
    <div
      className={classNames('Message', {
        'Message--my': isMine,
        'Message--typing': isTyping,
        'Message--audio': audioFile !== '',
        'Message--image': attachments.length === 1,
      })}>
      <Avatar src={avatar} user={user} />

      <div className="Message__info">
        <div className="Message__content">
          {(audioFile || text || isTyping) && (
            <div className="Message__bubble">
              {text && <p className="Message__text">{text}</p>}

              {isTyping && <MessageTyping />}

              {audioFile && <MessageAudio src={audioFile} />}
            </div>
          )}
          {!!attachments.length && (
            <MessageAttachments attachments={attachments} />
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
  date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
