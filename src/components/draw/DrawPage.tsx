'use client'

import { useDraw } from "@/hooks/useDraw";
import { drawLine } from "@/lib/utils";
import { Draw, Point } from "@/types";
import { useEffect, useState } from "react"
import { ChromePicker } from 'react-color'

import { io } from 'socket.io-client'
const socket = io('http://localhost:3003')

type DrawLineProps = {
  prevPoint: Point | null
  currentPoint: Point
  color: string
}

const DrawPage = () => {
  const [color, setColor] = useState('#000');
  const { canvasRef, clear } = useDraw(createLine)
  const onMouseDown = useDraw(createLine).onMousedown

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d')

    socket.emit('client-ready')

    socket.on('get-canvas-state', () => {
      if (!canvasRef.current?.toDataURL()) return;
      console.log("Sending canvas state");
      socket.emit('canvas-state', canvasRef.current?.toDataURL())
    })

    socket.on('canvas-state-from-server', (state: string) => {
      console.log("Received prev state");
      const img = new Image();
      img.src = state;
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);
      }
    })

    socket.on('draw-line', ({ prevPoint, currentPoint, color }: DrawLineProps) => {
      if (!ctx) return console.log('no ctx here')
      drawLine({ prevPoint, currentPoint, ctx, color })
    })

    socket.on('clear', clear)

    return () => {
      socket.off('draw-line');
      socket.off('get-canvas-state')
      socket.off('canvas-state-from-server')
      socket.off('clear')
    }
  }, [canvasRef])

  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
    socket.emit('draw-line', { prevPoint, currentPoint, color })
    drawLine({ prevPoint, currentPoint, ctx, color })
  }

  return (
    <div>
      <div>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button
          type='button'
          className='p-2 rounded-md border border-black'
          onClick={() => socket.emit('clear')}
        >
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  )
}

export default DrawPage