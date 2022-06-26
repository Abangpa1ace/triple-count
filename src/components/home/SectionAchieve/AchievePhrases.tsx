import styled from 'styled-components'

import CountUp from '@/components/common/CountUp'

interface PhraseType {
  id: string
  unit: string
  text: string
  max: number
}

const ScAchievePhrases = styled.ul`
  margin-left: 783px;
  padding-top: 150px;

  li {
    margin-bottom: 20px;
    text-align: left;

    * {
      font-size: 36px;
      letter-spacing: -1px;
    }
  }
`

const AchievePhrases = () => {
  const phrases: PhraseType[] = [
    { id: 'traveler', unit: '명', text: '여행자', max: 700 },
    { id: 'review', unit: '개', text: '여행 리뷰', max: 100 },
    { id: 'schedule', unit: '개', text: '여행 일정', max: 470 },
  ]

  return (
    <ScAchievePhrases>
      {phrases.map(({ id, unit, text, max }) => {
        return (
          <li key={id}>
            <b>
              <CountUp max={max} />
              {unit}
            </b>
            <span> {text}</span>
          </li>
        )
      })}
    </ScAchievePhrases>
  )
}

export default AchievePhrases
