import React from 'react'
import classNames from 'classnames'

import { Time, CheckMarker } from 'components'

import './DialogItem.scss'

const DialogItem = ({ data }) => {
  return (
    <div className="DialogItem">
      <div
        className={classNames('DialogItem__avatar', {
          'DialogItem__avatar--online': data.user.isOnline,
        })}>
        <img src={data.user.avatar} alt={`${data.user.fullName} avatar`} />
      </div>
      <div className="DialogItem__content">
        <div className="DialogItem__top">
          <span className="DialogItem__name">{data.user.fullName}</span>
          <Time
            value={data.createdAt}
            addSuffix={false}
            includeSeconds={false}
            isFormatted
          />
        </div>
        <div className="DialogItem__bottom">
          <p className="DialogItem__text">{data.text}</p>
          {data.unreaded > 0 ? (
            <span className="DialogItem__counter">
              {data.unreaded > 9 ? '9+' : data.unreaded}
            </span>
          ) : (
            <CheckMarker checked={data.unreaded === 0} />
          )}
        </div>
      </div>
    </div>
  )
}

export default DialogItem
