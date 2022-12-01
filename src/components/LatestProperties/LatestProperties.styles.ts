import styled from "styled-components";

export const LatestPropertiesContainer = styled.section`
  min-height: 90vh;
  display: grid;
  place-content: center;
  padding: var(--space-sections);
  max-width: 90%;
  margin: 0 auto;
`;

export const ListContainer = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  ß &:-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 768px) {
  }
`;
