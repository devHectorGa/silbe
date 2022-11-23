import styled from "styled-components";

export const LatestPropertiesContainer = styled.section`
  min-height: 90vh;
  display: grid;
  place-content: center;
  padding: 6rem 1rem;
`;

export const ListContainer = styled.section`
  width: 95%;
  max-width: 1024px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  gap: 1rem;
  ß &:-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    overflow-x: initial;
    width: 80%;
  }
  @media screen and (min-width: 1024) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
