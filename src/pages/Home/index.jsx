import React from 'react'

import { DialogList } from 'components'

import './Home.scss'

const Home = () => {
  const myid = 1;

  const dialogs = [ 
    {
      id: 1,
      text: 'Lorem ipsum do sole abre librum, Lorem ipsum do sole abre librum',
      createdAt: new Date(),
      unreaded: 2,
      user: {
        id: 1,
        avatar: 'https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg',
        fullName: 'Александр Пушкин',
        isOnline: true
      }
    },
    {
     
      id: 2,
      text: 'Lorem ipsum do sole abre librum, Lorem ipsum do sole abre librum',
      createdAt: Date.parse('Thu April 30 2020 11:45:51 GMT+0300 (Москва, стандартное время)'),
      unreaded: 10,
      user: {
        id: 2,
        avatar: null,
        fullName: 'Александр Пушкин',
        isOnline: true
      }
     
    }
  ]

  return (
    <section className="Home">
      <DialogList dialogs={dialogs} userId={myid} />
  
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
