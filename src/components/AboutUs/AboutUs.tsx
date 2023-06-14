import { Typography } from "antd";
import { ImageResponsive } from "../common";
import { AboutTitle, AboutUsContainer, AboutUsContent } from "./AboutUs.styles";
import { AboutWaves } from "./AboutWaves";

const { Paragraph } = Typography;

export const AboutUs = () => (
  <AboutUsContainer>
    <AboutWaves />
    <AboutUsContent className="dark">
      <AboutTitle>QUIENES SOMOS</AboutTitle>
      <ImageResponsive src="/SIL.svg" alt="Logo" />
      <Paragraph>
        Somos un gran equipo que trabaja en la parte inmobiliaria y la parte jurídica, una fusión donde encontraran la facilidad, eficiencia, capacidad y responsabilidad para dar solución y encontrar la ayuda necesaria a su necesidad. Siempre seremos su mejor opción para vender o comprar sus inmuebles y la mejor asesoría Jurídica a sus inconvenientes.
      </Paragraph>
    </AboutUsContent>
  </AboutUsContainer>
);
