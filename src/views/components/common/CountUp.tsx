import React from 'react'

import useCountUp from '@/hooks/useCountUp'

interface Props {
  end: number
}

const CountUp: React.FC<Props> = ({ end }) => {
  const { count } = useCountUp({ end })

  return <span>{count}</span>
}

export default CountUp
