import styled from "styled-components";

export const SocialContainer = styled.section`
  min-height: 80vh;
  display: grid;
  place-content: center;
  position: relative;
  background-color: #4d4d4d;
`;

export const SocialList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  gap: 1rem;
`;
