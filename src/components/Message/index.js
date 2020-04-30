import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import formatDistance from 'date-fns/formatDistance'
import ruLocale from 'date-fns/locale/ru'

import readedIcon from 'assets/img/readedIcon.svg'
import checkIcon from 'assets/img/checkIcon.svg'

import './Message.scss'

const Message = ({ avatar, user, text, date, attachments, isMine, isReaded }) => {
  const beautyDate = formatDistance(date, new Date(), {
    addSuffix: true,
    locale: ruLocale,
    includeSeconds: true,
  })

  return (
    <div className={classNames('Message', { 'Message--my': isMine })}>
      <div className="Message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullName}`} />
      </div>
      <div className="Message__info">
        <div className="Message__content">
          <div className="Message__bubble">
            <p className="Message__text">{text}</p>
          </div>
          {attachments && (
            <ul className="Message__attachments">
              {attachments.map((attach, index) => (
                <li className="Message__attachments-item" key={index}>
                  <img src={attach.url} alt={attach.fileName} />
                </li>
              ))}
            </ul>
          )}
          <span className="Message__date">{beautyDate}</span>
        </div>
      </div>
      {isMine && (
        <div className="Message__checked">
          <img src={isReaded ? readedIcon : checkIcon} alt="" />
        </div>
      )}
    </div>
  )
}

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.number,
  attachments: PropTypes.array,
  isMine: PropTypes.bool,
  isReaded: PropTypes.bool,
}

Message.defaultProps = {
  user: {},
  attachments: [],
  isMine: false,
  isReaded: false,
}

export default Message