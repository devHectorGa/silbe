import { MainLayout } from "../src/layout";
import "../src/styles/styles.less";

function MyApp({ Component, pageProps }) {
  const ActiveLayout = Component.Layout || MainLayout;
  return (
    <ActiveLayout>
      <Component {...pageProps} />
    </ActiveLayout>
  );
}

export default MyApp;
