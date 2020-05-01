import React from 'react'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ list }) => (
  <div className="DialogList">
    {list.map((item, index) => (
      <DialogItem user={item.user} message={item.message} key={index} />
    ))}
  </div>
)

export default DialogList
