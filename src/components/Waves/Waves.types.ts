import { PropsWithChildren } from "react";
import { StyledComponent } from "styled-components";

export type WaveContainerProps = PropsWithChildren<{
  Bottom?: Boolean;
  ContainerProps?: StyledComponent<"svg", any, {}, never>;
}>;
