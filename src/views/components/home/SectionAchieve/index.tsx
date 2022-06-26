import styled from 'styled-components'

import { aniExposeUp } from '@/styles/keyframes'

import AchieveImage from './AchieveImage'
import AchievePhrases from './AchievePhrases'
import AchieveStores from './AchieveStores'

const ScSectionAchieve = styled.section`
  height: 552px;

  .container {
    position: relative;
    width: 1200px;
    height: auto;
    margin: 0 auto;

    > * {
      &:nth-child(1) {
        ${aniExposeUp(0)}
      }
      &:nth-child(2) {
        ${aniExposeUp(0.1)}
      }
      &:nth-child(3) {
        ${aniExposeUp(0.2)}
      }
    }
  }
`

const SectionAchieve = () => {
  return (
    <ScSectionAchieve>
      <div className="container">
        <AchieveImage />
        <AchievePhrases />
        <AchieveStores />
      </div>
    </ScSectionAchieve>
  )
}

export default SectionAchieve
