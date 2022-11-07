import { Carousel, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Carousel dotPosition="right" className="HomePage-Carousel">
        <Space direction="vertical">
          <Title level={3}>1</Title>
        </Space>
        <div>
          <Title level={3}>2</Title>
        </div>
      </Carousel>
    </>
  );
}
