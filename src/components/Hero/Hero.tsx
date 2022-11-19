import { Button, Typography } from "antd";
import { HeroContainer, HeroContent } from "./Hero.styles";
import { Waves } from "./Waves";

const { Title, Paragraph } = Typography;

export const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <Title>Eden del Parque</Title>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Paragraph>
      <Button type="primary">Leer mas...</Button>
    </HeroContent>
    <Waves />
  </HeroContainer>
);
