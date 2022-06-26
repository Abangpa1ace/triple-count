import React from 'react'
import styled from 'styled-components'

interface Props {
  max: number
}

const ScCountUp = styled.span``

const CountUp: React.FC<Props> = ({ max }) => {
  return <ScCountUp>{max}</ScCountUp>
}

export default CountUp
