import { Typography } from "antd";
import styled from "styled-components";

export const AboutUsContainer = styled.section`
  min-height: 90vh;
  display: grid;
  place-content: center;
  background-color: #4d4d4d;
  position: relative;
`;

export const AboutUsContent = styled.div`
  max-width: 40rem;
  margin: 3rem;
  display: grid;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: 240px 1fr;
  }
`;

export const WaveTopContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
`;
export const WaveBottomContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

export const SVGWave = styled.svg`
  position: relative;
  display: block;
  width: calc(100%);
  height: 100px;
  transform: rotateY(180deg);

  .shape-fill {
    fill: #ffffff;
  }
`;

export const AboutTitle = styled(Typography.Title)`
  grid-column: span 3;
  text-align: center;
`;
