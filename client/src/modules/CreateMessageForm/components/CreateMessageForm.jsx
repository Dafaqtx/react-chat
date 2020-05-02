import React from 'react'

import { Input, Button } from 'antd'
import {
  SmileOutlined,
  AudioOutlined,
  PaperClipOutlined,
  SendOutlined,
} from '@ant-design/icons'

import './CreateMessageForm.scss'

const CreateMessageForm = () => {
  return (
    <div className="CreateMessageForm">
      <div className="CreateMessageForm__emojy">
        <Button shape="circle" icon={<SmileOutlined />} />
      </div>
      <div className="CreateMessageForm__field">
        <Input size="large" placeholder="Введите текст сообщения" />
      </div>
      <div className="CreateMessageForm__actions">
        <Button shape="circle" icon={<PaperClipOutlined />} size="large" />
        <Button shape="circle" icon={<AudioOutlined />} size="large" />
        <Button shape="circle" icon={<SendOutlined />} size="large" />
      </div>
    </div>
  )
}

export default CreateMessageForm
