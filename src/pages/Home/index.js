import React from 'react'
import { Tooltip, Button } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import dialogs from 'data.json'

import { DialogList, MessagesList } from 'components'
import { CreateMessageForm } from 'modules'

import './Home.scss'

const Home = () => {
  return (
    <section className="Home">
      <div className="Chat">
        <div className="Chat__sidebar">
          <div className="Chat__sidebar-header">
            <div className="Chat__sidebar-list">
              <TeamOutlined />
              <span>Спиоск диалогов</span>
            </div>
            <Tooltip title="Создать диалог">
              <Button shape="circle" icon={<FormOutlined />} />
            </Tooltip>
          </div>
          <div className="Chat__sidebar-dialogs">
            <DialogList dialogs={dialogs} userId={1} />
          </div>
        </div>
        <div className="Chat__dialog">
          <div className="Chat__dialog-header">
            <div></div>
            <div className="Chat__dialog-center">
              <div className="Chat__dialog-header-name">Valera smirnov</div>
              <div className="Chat__dialog-status">
                <span className="status status--online">Онлайн</span>
              </div>
            </div>
            <div className="Chat__dialog-actions">
              <Tooltip title="Действия">
                <Button
                  shape="circle"
                  icon={<EllipsisOutlined style={{ fontSize: 24 }} />}
                />
              </Tooltip>
            </div>
          </div>
          <div className="Chat__dialog-messages">
            <MessagesList messages={[]} />
          </div>
          <div className="Chat__dialog-create">
            <CreateMessageForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
