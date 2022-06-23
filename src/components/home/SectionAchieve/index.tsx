import styled from 'styled-components'

const ScSectionAchieve = styled.section`
  .container {
    width: 1200px;
    height: auto;
    margin: 0 auto;
  }
`

const MainImage = styled.div``

const SectionAchieve = () => {
  return (
    <ScSectionAchieve>
      <div className="container">
        <MainImage>
          <img src="./assets/image/triple2x.png" alt="achieve-main-img" />
        </MainImage>
      </div>
    </ScSectionAchieve>
  )
}

export default SectionAchieve
