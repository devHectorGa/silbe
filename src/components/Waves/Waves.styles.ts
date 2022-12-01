import styled, { css } from "styled-components";

const WaveCommonStyles = css`
  position: absolute;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

export const WaveTopContainer = styled.div`
  ${WaveCommonStyles}

  top: -1px;
  transform: rotate(180deg);
`;
export const WaveBottomContainer = styled.div`
  ${WaveCommonStyles}

  bottom: -1px;
`;

export const SVGWave = styled.svg`
  position: relative;
  display: block;
  width: calc(100% + 3px);
  height: 100px;
  transform: rotateY(180deg);

  .shape-fill {
    fill: #ffffff;
  }
`;
