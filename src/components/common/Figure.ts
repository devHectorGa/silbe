import styled, { css } from "styled-components";

export const FigureStyles = css`
  width: 100%;
  position: relative;
  margin: 0 auto;

  img {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const Figure = styled.figure`
  ${FigureStyles}
`;
