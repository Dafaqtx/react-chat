import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Empty } from 'antd';

import { MessageItem } from 'components';

import './MessagesList.scss';

const MessagesList = ({ messages, isLoading, messageScrollRef }) => {
  return (
    <div className="MessagesList" ref={messageScrollRef}>
      {isLoading ? (
        <Spin size="large" />
      ) : messages && !isLoading ? (
        messages.length > 0 ? (
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
        )
      ) : (
        <Empty description="Начните диалог" />
      )}
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.array,
};

MessagesList.defaultPropTypes = {
  messages: [],
};

export default MessagesList;
