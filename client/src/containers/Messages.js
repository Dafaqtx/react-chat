import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Spin } from 'antd'

import { messagesActions } from 'redux/actions'

import { MessagesList } from 'components'

const Messages = ({ items, isLoading, currentDialogId, getMessagesList }) => {
  useEffect(() => {
    if (currentDialogId) {
      getMessagesList(currentDialogId)
    }
  }, [currentDialogId, getMessagesList])

  return <MessagesList messages={items} isLoading={isLoading} />
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
