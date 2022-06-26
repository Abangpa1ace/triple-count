# Triple CodeTest

<br/>

## 개요

- 기간(1주) : 6.23(수) ~ 6.26(일)<종료>
- 주제 : Triple 홈페이지 한 섹션을 구현합니다. (이미지/텍스트 마크업, Fade-Up 애니메이션, Count-Up 애니메이션)
- 기술스택 : HTML/CSS, Javascript(ES6), Typescript, React, React-Router-Dom, Styled-Components, Vite
- **프로젝트 실행방법**
  ```
  yarn dev    // development build
  yarn build  // production build
  ```
  
<br/>

## 구현상세(사용기술 및 선택이유)

### 컴포넌트 및 상태

- 페이지`<HomePage>` 내, 섹션`<SectionAchieve>` 컴포넌트에 구현했습니다. 다시 **내부 영역들을 컴포넌트들로 분리**합니다.(가독성 및 유지보수 향상)
- 우측 `<AchievePhrases>`, `<AchieveStores>` 컴포넌트 내 **반복적인 UI는 Array 상수를 맵핑하여 표현**했습니다.
- **`<CountUp>` 컴포넌트**로 숫자 부분만 분리 및 count 상태값(Hooks)을 통한 **최소한의 영역만 Re-Render** 합니다.
<br/><br/>

### 퍼블리싱

- 사이트 상, **좌측 이미지는 absolute, 우측 컨텐츠는 box-flow로 배치**되어 이를 그대로 구현했습니다.<br/>
  제가 더 선호하기도 하고 반응형 형태를 고려했을때, **Flex-Box를 적용하여 direction을 바꾸는 방법**도 괜찮겠다고 생각했습니다.<br/>
- 일회성 이미지를 사용할 때, `<img>`태그를 사용하는 것보다 **background-image 프로퍼티를 사용하는 게 더 용이**하다고 느꼈습니다.<br/>
  단 `<AchieveStores>`와 같이, 이미지 url을 맵핑하는 경우 인라인 스타일을 불가피하게 사용하는 제한사항이 있었습니다.
<br/><br/>

### Fade-Up 구현

- 먼저, styled-components의 **keyframes** 문법을 통해, translateY & opacity 변환을 통한 **transUp 애니메이션**을 만들었습니다.<br/>
- 다시, **aniExposeUp() 함수**를 만들었습니다.<br/>
  이는, **delay(지연시간)을 인자**로 받아, duration, time-function이 **공통으로 설정된 transUp 애니메이션 프로퍼티를 css 문법으로 반환합**니다.<br/>
- `<SectionAchieve>` 각 영역별로, 0s, 0.1s, 0.2s 의 delay를 적용한 aniExposeUp()을 부여합니다.
<br/><br/>

### Count-Up 구현

1. **useCountUp Hooks**를 만들었습니다. 옵션으로 end(종료값), start(시작값, 0이 기본), duration(진행시간, 2초 기본) 를 받고, count 카운트업 숫자 state를 반환합니다.
2. **fps는 60프레임**으로 **사람이 인지하는 최적의 프레임이자, 인터벌에 적용할 실행간격** 입니다. **frames**는 duration 시간동안 **총 프레임수** 입니다.
```본래, stepTime(duration / end)로 인터벌을 쪼개보았으나, 반올림/버림 등을 적용하면 값별로 시간차가 존재하므로 종료시간이 조금씩 달라짐```
3. **setInterval() 인터벌**을 통해 구현하며, 실행간격은 fps(60/1000 초)입니다. **rate(프레임 비율)이 100%거나, Unmount 되는 경우 clearInterval()** 합니다.
4. **frameCount는 몇 번째 프레임**인지를 의미하는 변수입니다. 0으로 초기화하며, 매 인터벌마다 1씩 먼저 증가시켜줍니다.(++frameCount)
5. **rate는 프레임 비율**로, 현재 프레임이 전체 몇%인지 의미합니다. 여기에 **end값을 곱한 값을 setCount() 세터함수로 갱신**합니다.
6. 위는 Linear하게 증가하는 로직입니다. 증가속도가 느려지는 효과를 구현하기 위해 **Ease Function인 easeOutExpo()** 를 rate로 적용합니다. (<a href="https://easings.net/ko">레퍼런스</a>)
7. `<CountUp>` 컴포넌트가 Props로 받은 end(최종값)을 useCountUp() 옵션에 설정하며, 반환되는 count값으로 렌더링한다.


