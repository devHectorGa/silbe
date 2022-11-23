import Image, { ImageProps } from "next/image";
import { FC, PropsWithChildren } from "react";
import { Figure } from "./Figure";

export const ImageResponsive: FC<PropsWithChildren<ImageProps>> = (props) => (
  <Figure>
    <Image fill {...props} alt={props.alt || ""} />
  </Figure>
);
