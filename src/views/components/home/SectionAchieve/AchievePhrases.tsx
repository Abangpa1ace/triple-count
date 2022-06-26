import styled from 'styled-components'

import CountUp from '@/views/components/common/CountUp'

interface PhraseType {
  id: string
  unit: string
  text: string
  count: number
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

const phrases: PhraseType[] = [
  { id: 'traveler', unit: '명', text: '여행자', count: 700 },
  { id: 'review', unit: '개', text: '여행 리뷰', count: 100 },
  { id: 'schedule', unit: '개', text: '여행 일정', count: 470 },
]

const AchievePhrases = () => {
  return (
    <ScAchievePhrases>
      {phrases.map(({ id, unit, text, count }) => {
        return (
          <li key={id}>
            <b>
              <CountUp end={count} />
              {unit}
            </b>
            <span>의 {text}</span>
          </li>
        )
      })}
    </ScAchievePhrases>
  )
}

export default AchievePhrases
