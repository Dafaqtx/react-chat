import React from 'react'
import { Empty, Input } from 'antd'

import DialogItem from '../DialogItem'

import './DialogList.scss'

const DialogList = ({ dialogs, userId, onSearch, onSelectDialog }) => {
  return (
    <div className="DialogList">
      <div className="DialogList__search">
        <Input.Search
          placeholder="Поиск среди контактов"
          onChange={e => onSearch(e.target.value)}
        />
      </div>

      {dialogs.length ? 
        dialogs.map(dialog => 
          <DialogItem
            dialog={dialog}
            key={dialog._id}
            isMine={dialog.user._id === userId}
            onSelectDialog={() => onSelectDialog(dialog._id)}
          />
        
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
