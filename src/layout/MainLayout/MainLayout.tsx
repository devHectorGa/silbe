import { Layout, Typography } from "antd";
import { FC, PropsWithChildren } from "react";
import { Header } from "../../components";

const { Content, Footer } = Layout;
const { Link, Text } = Typography;

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="Layout">
      <Header />
      <Content>{children}</Content>
      <Footer>
        <Text>
          Designed by{" "}
          <Link href="https:devHector.Ga" target="_blank">
            devHector.Ga
          </Link>{" "}
          &copy;2022
        </Text>
      </Footer>
    </Layout>
  );
};
