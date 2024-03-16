const { Socket } = require("socket.io")

const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

type Point = { x: number; y: number }

type DrawLine = {
  prevPoint: Point | null
  currentPoint: Point
  color: string
}

io.on('connection', (socket: typeof Socket) => {
  socket.on('join-room', (socketKey: string) => {
    socket.join(socketKey);
  })
  socket.on('client-ready', (socketKey) => {
    socket.to(socketKey).emit('get-canvas-state')
  })


  socket.on('canvas-state', (state: string, socketKey) => {
    console.log('received canvas state')
    socket.to(socketKey).emit('canvas-state-from-server', state)
  })

  socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLine, socketKey) => {
    socket.to(socketKey).emit('draw-line', { prevPoint, currentPoint, color })
  })

  socket.on('clear', (socketKey) => io.to(socketKey).emit('clear'))
})

server.listen(3003, () => {
  console.log('Server listening on port 3003')
})