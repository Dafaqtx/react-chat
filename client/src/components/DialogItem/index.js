import React from 'react'
import classNames from 'classnames'

import { Avatar, Time, CheckMarker } from 'components'

import './DialogItem.scss'

const DialogItem = ({ dialog, isMine }) => {
  return (
    <div className="DialogItem">
      <div
        className={classNames('DialogItem__avatar', {
          'DialogItem__avatar--online': dialog.user.isOnline,
        })}>
        <Avatar src={dialog.user.avatar} user={dialog.user} />
      </div>
      <div className="DialogItem__content">
        <div className="DialogItem__top">
          <span className="DialogItem__name">{dialog.user.fullName}</span>
          <Time
            value={dialog.createdAt}
            addSuffix={false}
            includeSeconds={false}
            isFormatted
          />
        </div>
        <div className="DialogItem__bottom">
          <p className="DialogItem__text">{dialog.text}</p>

          {dialog.user.unreaded > 0 ? (
            <span className="DialogItem__counter">
              {dialog.user.unreaded > 9 ? '9+' : dialog.user.unreaded}
            </span>
          ) : (
            <CheckMarker checked={isMine && dialog.user.unreaded === 0} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogItem
