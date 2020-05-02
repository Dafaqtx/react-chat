import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'

import { MessagesList } from 'components'

const Messages = ({ items, currentDialogId, getMessagesList }) => {

  useEffect(() => {
    if (currentDialogId) {
      getMessagesList(currentDialogId)
    }
  }, [currentDialogId, getMessagesList])

  return (
    <MessagesList messages={items} />
  )
}

Messages.propTypes = {
  items: PropTypes.array.isRequired,
  currentDialogId: PropTypes.number.isRequired,
}

export default connect(({ messages }) => messages, messagesActions)(Messages)
