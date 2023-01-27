/** 미디어 쿼리 자체를 내보낼 파일 */
import { css } from "styled-components";

const sizes = {
  mobile: 320,
  tab: 768,
  laptop: 1024,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
