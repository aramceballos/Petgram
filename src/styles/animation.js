import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
from {
  filter: blur(5px);
  opacity: 0;
};
to {
  filter: blur(0);
  opacity: 1;
}
`;

const appearListKeyframes = keyframes`
  from {
    top: -150px
  };
  to {
    top: -20px
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;

export const appearList = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${appearListKeyframes} ${type};
  `;
