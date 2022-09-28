import { css } from '@emotion/react';
import Head from 'next/head';
import Footer from './footer';
import Header from './header';

const mainStyles = css`
  padding: 10px 20px;
`;

export default function Layout(props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main css={mainStyles}>{props.children}</main>

      <Footer />
    </>
  );
}
