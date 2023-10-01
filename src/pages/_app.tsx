import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.scss";
import Head from "next/head";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Contact App</title>
        <meta name="description" content="This is a contact application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-customGrey-100 h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default api.withTRPC(MyApp);
