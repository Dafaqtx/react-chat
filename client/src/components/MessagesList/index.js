import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

import { MessageItem } from 'components'

import './MessagesList.scss'

const MessagesList = ({ messages }) => {
  return (
    <div className="MessagesList">
      {messages.length ? messages.map(message => 
        <MessageItem
          avatar={message.user.avatar}
          text={message.text}
          date={message.createdAt}
          user={message.user}
          key={message._id}
          isReaded
        />
      ) : (
        <Empty description="У вас пока нет сообщений" />
      )}
    </div>
  )
}

MessagesList.propTypes = {
  messages: PropTypes.array,
}
MessagesList.defaultPropTypes = {
  messages: [],
}

export default MessagesList
