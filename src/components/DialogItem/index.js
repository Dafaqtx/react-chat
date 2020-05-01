import React from 'react'
import classNames from 'classnames'
import { Time, CheckMarker } from 'components'

import './DialogItem.scss'

const DialogItem = ({ user, message }) => (
  <div className="DialogItem">
    <div
      className={classNames('DialogItem__avatar', {
        'DialogItem__avatar--online': user.isOnline,
      })}>
      <img src={user.avatar} alt={`${user.fullName} avatar`} />
    </div>
    <div className="DialogItem__content">
      <div className="DialogItem__top">
        <span className="DialogItem__name">{user.fullName}</span>
        <Time
          value={message.createdAt}
          addSuffix={false}
          includeSeconds={false}
        />
      </div>
      <div className="DialogItem__bottom">
        <p className="DialogItem__text">{message.text}</p>
        {message.unreaded > 0 ? (
          <span className="DialogItem__counter">
            {message.unreaded > 9 ? '9+' : message.unreaded}
          </span>
        ) : (
          <CheckMarker checked={message.unreaded === 0} />
        )}
      </div>
    </div>
  </div>
)

export default DialogItem
