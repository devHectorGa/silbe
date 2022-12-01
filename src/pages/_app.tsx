import { MainLayout } from "../layout";
import "../styles/styles.less";

function MyApp({ Component, pageProps }) {
  const ActiveLayout = Component.Layout || MainLayout;

  return <Component {...pageProps} />;
  // return (
  //   <ActiveLayout>
  //     <Component {...pageProps} />
  //   </ActiveLayout>
  // );
}

export default MyApp;
