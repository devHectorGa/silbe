import { Typography } from "antd";
import { HeroContainer, HeroContent } from "./Hero.styles";
import { Waves } from "./Waves";

const { Title, Paragraph } = Typography;

export const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <Title>SIL-BE</Title>
      <Paragraph>
        Somos un gran equipo que trabaja en la parte inmobiliaria y la parte
        jurídica, una fusión donde encontraran la facilidad, eficiencia,
        capacidad y responsabilidad para dar solución y encontrar la ayuda
        necesaria a su necesidad. Siempre seremos su mejor opción para vender o
        comprar sus inmuebles y la mejor asesoría Jurídica a sus inconvenientes.
      </Paragraph>
    </HeroContent>
    <Waves />
  </HeroContainer>
);
