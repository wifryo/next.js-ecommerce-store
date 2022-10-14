import { css, Global } from '@emotion/react';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { getParsedCookie, setStringifiedCookie } from '../utils/cookies';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState();

  useEffect(() => {
    const cartCookie = getParsedCookie('cart');
    if (cartCookie) {
      setCart(cartCookie);
    }
  }, []);

  useEffect(() => {
    if (typeof cart !== 'undefined') {
      setStringifiedCookie('cart', cart);
    }
  }, [cart]);

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

      <Layout cart={cart}>
        <Component {...pageProps} cart={cart} setCart={setCart} />
      </Layout>
    </>
  );
}

export default MyApp;
