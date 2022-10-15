import { Layout, Menu, MenuProps } from "antd";
import { FC, PropsWithChildren } from "react";

const { Content, Header, Footer } = Layout;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const items: MenuProps["items"] = [
    {
      label: "Finca Raíz",
      key: "realty",
      children: [
        { label: "Venta", key: "realty-sell" },
        { label: "Arrendamiento", key: "realty-lease" },
        { label: "Propiedad Horizontal", key: "realty-horizontal" },
        { label: "Embargos", key: "realty-embargoes" },
      ],
    },
    {
      label: "Jurídico",
      key: "legal",
      children: [
        { label: "Sucesiones", key: "legal-successions" },
        { label: "Hipotecas", key: "legal-mortgage" },
        { label: "Propiedad Horizontal", key: "realty-horizontal" },
        { label: "Embargos", key: "realty-embargoes" },
      ],
    },
  ];
  return (
    <Layout>
      <Header className="Header">
        <p>Logo</p>
        <Menu mode="horizontal" items={items} />
      </Header>
      <Content>{children}</Content>
      <Footer>Designed by devHector.Ga</Footer>
    </Layout>
  );
};
