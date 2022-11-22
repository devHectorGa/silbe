import { Typography } from "antd";
import Image from "next/image";
import { Figure, ServiceElement, ServicesContainer } from "./Services.styles";

const { Title, Paragraph } = Typography;

export const Services = () => (
  <ServicesContainer>
    <ServiceElement>
      <Figure className="blob">
        <Image src="/Buildings2.svg" alt="Inmuebles" fill />
      </Figure>
      <Title level={2}>Inmuebles</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has.
      </Paragraph>
    </ServiceElement>
    <ServiceElement>
      <Figure className="blob">
        <Image src="/legal.svg" alt="Inmuebles" fill />
      </Figure>
      <Title level={2}>Asesoría Legal</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has.
      </Paragraph>
    </ServiceElement>
  </ServicesContainer>
);
