import { useState, useEffect } from 'react'

interface OptionsType {
  end: number
  start?: number
  duration?: number
}

interface ReturnType {
  count: number
}

// const easeOutQuint = (x: number) => 1 - Math.pow(1 - x, 5)
const easeOutExpo = (x: number) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x))

const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
}: OptionsType): ReturnType => {
  const [count, setCount] = useState<number>(0)
  const fps = 60 / 1000
  const frames = Math.round(fps * duration)

  useEffect(() => {
    let nowCount = start
    const interval = setInterval(() => {
      const rate = easeOutExpo(++nowCount / frames)
      setCount(Math.round(end * rate))
      if (rate === 1) {
        clearInterval(interval)
      }

      return () => clearInterval(interval)
    })
  }, [end])

  return { count }
}

export default useCountUp
