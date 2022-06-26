import { keyframes, css } from 'styled-components'

export const transUp = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

export const aniExposeUp = (delay: number, duration = 0.7) =>
  css`
    animation: ${transUp} ${`${duration}s`} ease ${`${delay}s`};
  `
