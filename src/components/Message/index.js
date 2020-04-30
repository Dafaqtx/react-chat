import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatDistance from 'date-fns/formatDistance'
import ruLocale from 'date-fns/locale/ru'

import './Message.scss'

const Message = ({ avatar, user, text, date, isMine }) => {
  const beatyDate = formatDistance(date, new Date(), {
    addSuffix: true,
    locale: ruLocale,
    includeSeconds: true,
  })

  return (
    <div className={classNames('Message', { 'Message--my': isMine })}>
      <div className="Message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div className="Message__content">
        <div className="Message__bubble">
          <p className="Message__text">{text}</p>
        </div>
        <span className="Message__date">{beatyDate}</span>
      </div>
    </div>
  )
}

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.number,
  isMine: PropTypes.bool,
}

Message.defaultProps = {
  user: {},
  isMine: false,
}

export default Message
