import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { connect } from 'react-redux';

// import { messagesActions } from 'redux/actions';

import { MessagesList } from 'components';

const Messages = ({ items, isLoading, currentDialogId, getMessagesList }) => {
  const messageScrollRef = createRef();

  useEffect(() => {
    if (currentDialogId) {
      getMessagesList(currentDialogId);
    }
  }, [getMessagesList, currentDialogId]);

  useEffect(() => {
    if (messageScrollRef.current) {
      messageScrollRef.current.scrollTo(0, 999999);
    }
  }, [items, messageScrollRef]);

  return (
    <>
      {!isLoading ? (
        <MessagesList messages={items} messageScrollRef={messageScrollRef} />
      ) : (
        <Spin size="large" />
      )}
    </>
  );
};

Messages.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentDialogId: PropTypes.number,
};

Messages.defaultProps = {
  currentDialogId: null,
};

// export default connect(({ messages }) => messages, messagesActions)(Messages);
export default connect(({ messages }) => messages)(Messages);
