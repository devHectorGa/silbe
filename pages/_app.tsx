import { Typography } from "antd";
import Image from "next/image";
import styled from "styled-components";
import { MainLayout } from "../src/layout";
import "../src/styles/styles.less";

const { Title } = Typography;
function MyApp({ Component, pageProps }) {
  const ActiveLayout = Component.Layout || MainLayout;

  return (
    <Container>
      <Section>
        <Image src="/Build.svg" width={360} height={220} alt="Build" />
        <Title>En construcción</Title>
        <Figure>
          <Image src="/SIL.svg" fill alt="SIL-EB" sizes="120px" />
        </Figure>
      </Section>
    </Container>
  );
  // return (
  // <ActiveLayout>
  //   <Component {...pageProps} />
  // </ActiveLayout>
  // );
}

export default MyApp;

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  place-content: center;
`;

const Section = styled.section`
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

const Figure = styled.div`
  position: relative;
  width: 80%;
  max-width: 194px;
  height: 150px;
  max-height: 150px;
`;
