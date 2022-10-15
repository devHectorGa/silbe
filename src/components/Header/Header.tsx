import { Layout, Menu, Space } from "antd";
import { items } from "./Header.types";

export const Header = () => {
  return (
    <Layout.Header className="Header">
      <p>Logo</p>
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
  );
};
