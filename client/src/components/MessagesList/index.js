import React from 'react'
import PropTypes from 'prop-types'
import { Spin, Empty } from 'antd'

import { MessageItem } from 'components'

import './MessagesList.scss'

const MessagesList = ({ messages, isLoading }) => {
  return (
    <div className="MessagesList">
      {isLoading && <Spin size="large" />}

      {!isLoading && messages.length ? (
        messages.map(message => (
          <MessageItem
            avatar={message.user.avatar}
            text={message.text}
            date={message.createdAt}
            user={message.user}
            key={message._id}
            isReaded
          />
        ))
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
