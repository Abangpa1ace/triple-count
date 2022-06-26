import styled from 'styled-components'

interface StoreType {
  id: string
  text1: string
  text2: string
  image: string
}

const ScAchieveStores = styled.ul`
  margin: 50px 0 140px 783px;
  white-space: nowrap;

  li {
    display: inline-block;
    height: 54px;
    margin-right: 39px;
    padding: 5px 0px 5px 62px;
    background-position: left top;
    background-repeat: no-repeat;
    background-size: 54px 54px;
    color: rgba(58, 58, 58, 0.8);
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
    text-align: left;
  }
`

const AchieveStores = () => {
  const stores: StoreType[] = [
    {
      id: 'google',
      text1: '2018 구글 플레이스토어',
      text2: '올해의 앱 최우수상 수상',
      image: './assets/image/play-store2x.png',
    },
    {
      id: 'apple',
      text1: '2018 애플 플레이스토어',
      text2: '오늘의 여행앱 선정',
      image: './assets/image/badge-apple4x.png',
    },
  ]
  return (
    <ScAchieveStores>
      {stores.map(({ id, text1, text2, image }) => {
        return (
          <li key={id} style={{ backgroundImage: `url(${image})` }}>
            {text1}
            <br />
            {text2}
          </li>
        )
      })}
    </ScAchieveStores>
  )
}

export default AchieveStores
