import { SectionWave, Waves } from "../Waves";

const { SVGContainer } = Waves;

export const AboutWaves = () => (
  <Waves>
    <SVGContainer>
      <SectionWave />
    </SVGContainer>
    <SVGContainer Bottom>
      <SectionWave />
    </SVGContainer>
  </Waves>
);
