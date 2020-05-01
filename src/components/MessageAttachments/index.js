import React from 'react'
import PropTypes from 'prop-types'

import './MessageAttachments.scss'

const MessageAttachments = ({ attachments }) => {
  return (
    <ul className="MessageAttachments">
      {attachments.map((attach, index) => (
        <li className="MessageAttachments__item" key={index}>
          <img src={attach.url} alt={attach.fileName} />
        </li>
      ))}
    </ul>
  )
}

MessageAttachments.propTypes = {
  attachments: PropTypes.array.isRequired,
}

export default MessageAttachments
