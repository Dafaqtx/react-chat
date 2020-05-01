import React from 'react'
import classNames from 'classnames'

import { Time, CheckMarker } from 'components'

import './DialogItem.scss'

const DialogItem = ({ dialog, isMine }) => {
  return (
    <div className="DialogItem">
      <div
        className={classNames('DialogItem__avatar', {
          'DialogItem__avatar--online': dialog.user.isOnline,
        })}>
        <img src={dialog.user.avatar} alt={`${dialog.user.fullName} avatar`} />
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

          {dialog.unreaded > 0 ? (
            <span className="DialogItem__counter">
              {dialog.unreaded > 9 ? '9+' : dialog.unreaded}
            </span>
          ) : (
            <CheckMarker checked={isMine && dialog.unreaded === 0} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogItem
