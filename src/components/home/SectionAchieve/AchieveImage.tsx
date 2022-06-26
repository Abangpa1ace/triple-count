import styled from 'styled-components'

const ScAchieveImage = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url('./assets/image/triple2x.png');
  background-size: 400px 338px;
  background-repeat: no-repeat;
  padding-top: 280px;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
  text-align: center;
`

const AchieveImage = () => {
  return <ScAchieveImage>2021년 12월 기준</ScAchieveImage>
}

export default AchieveImage
