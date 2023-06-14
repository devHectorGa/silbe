import { FC, PropsWithChildren } from "react";
import { SVGWave, WaveBottomContainer, WaveTopContainer } from "./Waves.styles";
import { WaveContainerProps } from "./Waves.types";

export const SVGContainer: FC<WaveContainerProps> = ({
  Bottom,
  children,
  ContainerProps,
}) => {
  const Container = Bottom ? WaveBottomContainer : WaveTopContainer;
  return (
    <Container>
      <SVGWave
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...(typeof ContainerProps === "object" ? ContainerProps : {})}
      >
        {children}
      </SVGWave>
    </Container>
  );
};

export const Waves: FC<PropsWithChildren> = ({ children }) => <>{children}</>;
