import React from 'react'

import { DialogItem, Message } from 'components'

import './Home.scss'

const Home = () => {
  return (
    <section className="Home">
      <div className="DialogList">
        <DialogItem 
         user={{
            avatar: 'https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg',
            fullName: 'Александр Пушкин',
            isOnline: true
          }}
          message={{
            text: 'Lorem ipsum do sole abre librum, Lorem ipsum do sole abre librum',
            createdAt: new Date(),
            unreaded: 2,
          }}
        />
        <DialogItem 
         user={{
            avatar: 'https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg',
            fullName: 'Александр Пушкин',
            isOnline: true
          }}
          message={{
            text: 'Lorem ipsum do sole abre librum, Lorem ipsum do sole abre librum',
            createdAt: new Date(),
            unreaded: 10,
          }}
        />
        <DialogItem 
         user={{
            avatar: 'https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg',
            fullName: 'Александр Пушкин',
          }}
          message={{
            text: 'Lorem ipsum do sole abre librum, Lorem ipsum do sole abre librum',
            createdAt: new Date(),
            unreaded: 0
          }}
        />
      </div>
      {/* <DialogList items={[
        {
          user: {
            fullName: 'Александр Пушкин',
            avatar: null,
          },
          message : {
            text: 'Lorem ipsum do sole abre librum',
            isNew: false,
            createdAt: new Date()
          },
        }
      ]} /> */}
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
