import { Layout, Menu } from "antd";
import { items } from "./Header.types";
import Image from "next/image";

export const Header = () => {
  return (
    <Layout.Header className="Header">
      <Image src="/SIL.svg" alt="Logo" width={80} height={80} />
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
  );
};
