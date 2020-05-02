import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { messagesActions } from 'redux/actions'

import { MessagesList } from 'components'

const Messages = ({ items, getMessagesList }) => {
 

  useEffect(() => {
    if (!items.length) {
      getMessagesList()
    }
  }, [items, getMessagesList])

  return (
    <MessagesList messages={items} />
  )
}

Messages.propTypes = {
  items: PropTypes.array.isRequired,
}

export default connect(({ messages }) => messages, messagesActions)(Messages)
