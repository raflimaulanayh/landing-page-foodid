/* eslint-disable @next/next/no-page-custom-font */
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </div>
  );
}
