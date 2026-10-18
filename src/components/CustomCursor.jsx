import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let raf

    const onMouseMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.08
      cursorY += (mouseY - cursorY) * 0.08
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      raf = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animateCursor)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <div className="custom-cursor" ref={cursorRef}></div>
}
