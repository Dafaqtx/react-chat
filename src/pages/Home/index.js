import React from 'react'
import { Input } from 'antd'
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons'
import dialogs from 'data.json'

import { DialogList } from 'components'

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
            <div className="Chat__dialog-center">
              <div className="Chat__dialog-header-name"></div>
              <div className="Chat__dialog-status">
                <div className="status status--online">Онлайн</div>
              </div>
            </div>
            <div className="Chat__dialog-actions">
              <EllipsisOutlined />
            </div>
          </div>
        </div>
      </div>

      {/* <Message
        avatar="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={Date.parse('Thu Apr 30 2020 15:40:23')}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
          },
        ]}
      />
      <Message
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
        date={Date.parse('Thu Apr 30 2020 15:41:33')}
        audioFile="https://notificationsounds.com/soundfiles/069059b7ef840f0c74a814ec9237b6ec/file-de_vuvuzela-power-down.mp3"
      />
      <Message
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
        text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"
        date={Date.parse('Thu Apr 30 2020 15:41:33')}
        isMine
        isReaded
      />
      <Message
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
        isTyping
      />
       <Message
        avatar="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg"
        date={Date.parse('Thu Apr 30 2020 15:40:23')}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
          },
          
        ]}
      /> */}
    </section>
  )
}

export default Home
