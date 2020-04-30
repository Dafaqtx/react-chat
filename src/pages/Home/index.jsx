import React from 'react'

import { Message } from 'components'

import './Home.scss'

const Home = () => {
  return (
    <section className="Home">
      <Message
        avatar="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/img-academy-156-e1cc497311032f22eae4e66ce77b23f3.jpg"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={Date.parse('Thu Apr 30 2020 12:31:23')}
      />
      <Message
        avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
        text="Всё норм! Флот построили на Лауре. Галлов добили после вашего нападения. Спс! 🔥"
        date={Date.parse('Thu Apr 30 2020 12:31:33')}
        isMine
      />
    </section>
  )
}

export default Home
