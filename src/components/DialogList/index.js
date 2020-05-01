import React from 'react'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ dialogs, userId }) => (
  <div className="DialogList">
    {dialogs.map(dialog => (
      <DialogItem
        dialog={dialog}
        key={dialog.id}
        isMine={dialog.user.id === userId}
      />
    ))}
  </div>
)

export default DialogList
