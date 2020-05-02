import React, { useState } from 'react'
import { Empty, Input } from 'antd'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ dialogs, userId }) => {
  const [filteredList, setFilteredList] = useState(dialogs)

  const handleSearch = value => {
    if (value) {
      setFilteredList(
        dialogs.filter(el =>
          el.user.fullName.toLowerCase().includes(value.toLowerCase())
        )
      )
    } else {
      setFilteredList(dialogs)
    }
  }

  return (
    <div className="DialogList">
      <div className="DialogList__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={e => handleSearch(e.target.value)}
        />
      </div>

      {filteredList.length ? (
        filteredList.map(dialog => (
          <DialogItem
            dialog={dialog}
            key={dialog._id}
            isMine={dialog.user._id === userId}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Диалогов не найдено"
        />
      )}
    </div>
  )
}

export default DialogList
