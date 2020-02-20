const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const indexRouter = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api', indexRouter)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
