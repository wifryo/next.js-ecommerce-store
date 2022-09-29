import { css, Global } from '@emotion/react';
import CookieBanner from '../components/CookieBanner';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'J-LOG';
            font-style: normal;
            font-display: swap;
            src: url(/fonts/J-LOG-Rebellion-Sans-Small-Caps-Italic.otf)
              format('otf');
          }
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          body {
            margin: 0;
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
