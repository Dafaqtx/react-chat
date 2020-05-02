import React, { useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'

import { MessagesList } from 'components'

const Messages = ({ items, isLoading, currentDialogId, getMessagesList }) => {
  const messageScrollRef = createRef()

  useEffect(() => {
    if (currentDialogId) {
      getMessagesList(currentDialogId)
    }
  }, [getMessagesList, currentDialogId])

  useEffect(() => {
    messageScrollRef.current.scrollTo(0, 999999)
  }, [items, messageScrollRef])

  return (
    <MessagesList
      messages={items}
      isLoading={isLoading}
      messageScrollRef={messageScrollRef}
    />
  )
}

Messages.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentDialogId: PropTypes.number,
}

Messages.defaultProps = {
  currentDialogId: null,
}

export default connect(({ messages }) => messages, messagesActions)(Messages)
