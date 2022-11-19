import { Typography } from "antd";
import Image from "next/image";
import { Container, Figure, Section } from "./BuildPage.styles";

const { Title } = Typography;

export const BuildPage = () => (
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
