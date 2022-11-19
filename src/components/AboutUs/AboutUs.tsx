import { Typography } from "antd";
import Image from "next/image";
import { AboutTitle, AboutUsContainer, AboutUsContent } from "./AboutUs.styles";
import { WavesAbout } from "./Waves";

const { Paragraph } = Typography;

export const AboutUs = () => (
  <AboutUsContainer>
    <WavesAbout />
    <AboutUsContent>
      <AboutTitle>QUIENES SOMOS</AboutTitle>
      <Image src="/SIL.svg" alt="Logo" width={240} height={240} />
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Paragraph>
    </AboutUsContent>
  </AboutUsContainer>
);
