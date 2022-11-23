import styled from "styled-components";
import { FigureStyles } from "../common";

export const ServicesContainer = styled.section`
  display: grid;
  min-height: 80vh;
  place-content: center;
  margin: 1rem;

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ServiceElement = styled.div`
  display: grid;
  place-content: center;
  max-width: 350px;
  text-align: center;
  margin: 0 auto;
`;

export const Figure = styled.figure`
  ${FigureStyles}

  max-width: 200px;
  margin: 0 auto;
`;
