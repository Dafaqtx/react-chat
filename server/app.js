const express = require('express')
const config = require('config')

const app = express()

const PORT = config.get('port') || 3001

app.get('/', (req, res) => {
  console.log('req', req)
  console.log('res', res)
})

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
