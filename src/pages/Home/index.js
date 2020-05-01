import React from 'react'
import { Input } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import dialogs from 'data.json'

import { DialogList, Message } from 'components'

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
            <FormOutlined />
          </div>
          <div className="Chat__sidebar-search">
            <Input.Search
              placeholder="Поиск среди контактов"
              onSearch={value => console.log(value)}
            />
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
              <EllipsisOutlined style={{ fontSize: 24 }} />
            </div>
          </div>
          <div className="Chat__dialog-messages">
            <Message
              avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
              text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"
              date={'Thu Apr 30 2020 15:41:33'}
              user={{
                _id: 123,
                fullName: 'Valera smirnov',
              }}
              isReaded
            />
            <Message
              avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
              text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"
              date={'Thu Apr 30 2020 15:41:33'}
              user={{
                _id: 321,
                fullName: 'Kolya Bogomol',
              }}
              isMine
              isReaded
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
