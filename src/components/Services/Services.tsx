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
      <Title level={2}>INMOBILIARIA</Title>
      <Paragraph>
        Venta, compra, arrendamientos, propiedad horizontal, levantamiento de
        embargos, asesorías y todo lo relacionado con la finca raíz.
      </Paragraph>
    </ServiceElement>
    <ServiceElement>
      <Figure className="blob">
        <Image src="/legal.svg" alt="Inmuebles" fill />
      </Figure>
      <Title level={2}>JURÍDICA</Title>
      <Paragraph>
        Sucesiones, hipotecas, sección de derecho, Divorcio, testamentos; y todo
        lo relacionado con inconvenientes legales en cualquiera de sus ramas.
      </Paragraph>
    </ServiceElement>
  </ServicesContainer>
);
