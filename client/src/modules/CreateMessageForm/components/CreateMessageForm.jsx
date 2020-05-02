import React from 'react'
import Upload from 'rc-upload'

import { Input, Button } from 'antd'
import {
  SmileOutlined,
  AudioOutlined,
  PaperClipOutlined,
  SendOutlined,
} from '@ant-design/icons'

import './CreateMessageForm.scss'

const CreateMessageForm = () => {
  const uploaderProps = {
    action: '/upload.do',
    accept: 'jpg, jpeg, png',
    multiple: true,
    beforeUpload(file) {
      console.log('beforeUpload', file.name);
    },
    onStart: (file) => {
      console.log('onStart', file.name);
    },
    onSuccess(file) {
      console.log('onSuccess', file);
    },
    onProgress(step, file) {
      console.log('onProgress', Math.round(step.percent), file.name);
    },
    onError(err) {
      console.log('onError', err);
    },
  };
  return (
    <div className="CreateMessageForm">
      <div className="CreateMessageForm__emojy">
        <Button shape="circle" icon={<SmileOutlined />} />
      </div>
      <div className="CreateMessageForm__field">
        <Input size="large" placeholder="Введите текст сообщения" />
      </div>
      <div className="CreateMessageForm__actions">
        <Upload {...uploaderProps}>
          <Button shape="circle" icon={<PaperClipOutlined />} size="large" />
        </Upload>
        <Button shape="circle" icon={<AudioOutlined />} size="large" />
        <Button shape="circle" icon={<SendOutlined />} size="large" />
      </div>
    </div>
  )
}

export default CreateMessageForm
