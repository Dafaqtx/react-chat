import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'

import { MessageItem } from 'components'

const MessagesList = ({ messages }) => {
  return (
    <div className="MessagesList">
      {messages.length ? (
        <MessageItem
          avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
          text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"
          date={'Thu Apr 30 2020 15:41:33'}
          user={{
            _id: 123,
            fullName: 'Valera smirnov',
          }}
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
