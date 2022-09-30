import { css, Global } from '@emotion/react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: rgb(53, 50, 73);
            background: radial-gradient(
              circle,
              rgba(53, 50, 73, 1) 0%,
              rgba(26, 25, 36, 1) 46%,
              rgba(21, 20, 29, 1) 75%
            );
            font-family: 'Montserrat Alternates', sans-serif;
            color: #eaebe2;
          }
        `}
      />

      <CookieBanner />
      <Layout>
        {/*
          The "Component" component refers to
          the current page that is being rendered
        */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
