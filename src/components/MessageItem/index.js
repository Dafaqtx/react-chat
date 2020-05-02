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

import './MessageItem.scss'

const MessageItem = ({
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
      className={classNames('MessageItem', {
        'MessageItem--my': isMine,
        'MessageItem--typing': isTyping,
        'MessageItem--audio': audioFile !== '',
        'MessageItem--image': attachments.length === 1,
      })}>
      <Avatar src={avatar} user={user} />

      <div className="MessageItem__info">
        <div className="MessageItem__content">
          {(audioFile || text || isTyping) && (
            <div className="MessageItem__bubble">
              {text && <p className="MessageItem__text">{text}</p>}

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

MessageItem.propTypes = {
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

MessageItem.defaultProps = {
  user: {},
  attachments: [],
  audioFile: '',
  isMine: false,
  isReaded: false,
  isTyping: false,
}

export default MessageItem
