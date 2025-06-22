// pages/_app.tsx

import type { AppProps } from "next/app";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "@/styles/globals.css"; // Make sure this path is correct and the CSS file exists

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MyApp;


