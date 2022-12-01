import { Typography } from "antd";
import styled from "styled-components";

export const AboutUsContainer = styled.section`
  min-height: 90vh;
  padding: var(--space-sections);
  display: grid;
  place-content: center;
  background-color: var(--background);
  position: relative;
`;

export const AboutUsContent = styled.div`
  max-width: 50rem;
  text-align: justify;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 240px 1fr;
  }
`;

export const AboutTitle = styled(Typography.Title)`
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-column: span 2;
  }
`;
