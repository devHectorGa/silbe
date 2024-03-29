import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Figure = styled.div`
  position: relative;
  width: 80%;
  max-width: 194px;
  height: 150px;
  max-height: 150px;
`;
