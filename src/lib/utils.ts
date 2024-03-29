import { Draw } from "@/types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type DrawLineProps = Draw & {
  color: string
}


export const drawLine = ({ prevPoint, currentPoint, ctx, color }: DrawLineProps) => {
  const { x: currX, y: currY } = currentPoint
  const lineColor = color
  const lineWidth = 1

  let startPoint = prevPoint ?? currentPoint

  ctx.beginPath()
  ctx.lineWidth = lineWidth
  ctx.strokeStyle = lineColor
  ctx.moveTo(startPoint.x, startPoint.y)
  ctx.lineTo(currX, currY)
  ctx.stroke()

  ctx.fillStyle = lineColor
  ctx.beginPath()
  ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI)
  ctx.fill()
}