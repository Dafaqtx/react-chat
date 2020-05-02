import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spin } from 'antd';

import { messagesActions } from 'redux/actions'

import { MessagesList } from 'components'

const Messages = ({ items, messagesAreLoaded, currentDialogId, getMessagesList }) => {

  useEffect(() => {
    if (currentDialogId) {
      getMessagesList(currentDialogId)
    }
  }, [currentDialogId, getMessagesList])


  return (
    <>
      {messagesAreLoaded ? (
        <MessagesList messages={items} />
      ) : currentDialogId ? (
        <Spin size="large" />
      ) : null}
    </>
  )
}

Messages.propTypes = {
  items: PropTypes.array.isRequired,
  messagesAreLoaded: PropTypes.bool.isRequired,
  currentDialogId: PropTypes.number,
}

Messages.defaultProps = {
  currentDialogId: null
}

export default connect(({ messages }) => messages, messagesActions)(Messages)
