import React from 'react'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ dialogs }) => (
  <div className="DialogList">
    {dialogs.map(dialog => (
      <DialogItem data={dialog.message} key={dialog._id} />
    ))}
  </div>
)

export default DialogList
