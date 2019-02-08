require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { join } = require('path')


async function main() {
  const app = express()
  app.use(cors())
  app.use(express.static(join(__dirname, 'public')))

  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}...`)
  })
}

main().catch(console.error)