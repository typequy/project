const express = require('express')
const app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);
const port = 3000
const cors = require('cors')
const indexRouter = require('./routes/index')
const errorHandle = require('./middlewares/errorHandler')
const {Room} = require('./models')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next) => {
  req.io = io
  next()
})
app.use('/api', indexRouter)
app.use(errorHandle)
// Room
//   .findAll({
//     where:{
//       status:'Open'
//     }
//   })
//   .then(data => {
//     data.forEach(element => {
//       const nsp = io.of(`/${element.id}`);
//       nsp.on('connection', function(socket){
//         socket.join(element.id);
//         nsp.in(element.id).emit('connectToRoom', 'roster');
//       });
//     });
//   })
server.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
