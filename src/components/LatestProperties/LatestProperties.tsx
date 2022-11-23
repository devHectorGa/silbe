import { COPCurrency } from "@utils/CurrencyFormat";
import { Card, Typography } from "antd";
import Image from "next/image";
import { Figure, ImageResponsive } from "../common";
import {
  LatestPropertiesContainer,
  ListContainer,
} from "./LatestProperties.styles";
import { properties } from "./properties";

const { Title, Paragraph, Text } = Typography;

export const LatestProperties = () => (
  <LatestPropertiesContainer>
    <Title>Últimos predios</Title>
    <ListContainer>
      {properties.map(({ description, price, img }, index) => (
        <Card
          key={index}
          cover={<ImageResponsive src={img} alt={description} />}
        >
          <Text type="warning">{COPCurrency.format(price)}</Text>
          <Paragraph>{description}</Paragraph>
        </Card>
      ))}
    </ListContainer>
  </LatestPropertiesContainer>
);
