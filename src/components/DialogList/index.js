import React from 'react'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ messages }) => {
  console.log(messages.map(m => m))
  return (
    <div className="DialogList">
      {messages.map(message => (
        <DialogItem data={message} key={message.id} />
      ))}
    </div>
  )
}

export default DialogList
