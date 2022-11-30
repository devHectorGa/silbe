import { Typography } from "antd";
import { SectionWave, Waves } from "../Waves";
import { SocialContainer, SocialList } from "./Social.styles";

const { SVGContainer } = Waves;
const { Title } = Typography;

export const Social = () => (
  <SocialContainer className="dark">
    <Waves>
      <SVGContainer>
        <SectionWave />
      </SVGContainer>
    </Waves>
    <Title className="dark">CONTÁCTANOS</Title>
    <SocialList></SocialList>
  </SocialContainer>
);
