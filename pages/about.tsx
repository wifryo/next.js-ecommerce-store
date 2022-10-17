import { css } from '@emotion/react';
import Head from 'next/head';

const mainStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 455px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;

const headerStyles = css`
  margin-left: calc(50vw - 330px);
`;

export default function About() {
  return (
    <>
      <Head>
        <title>products</title>
        <meta name="description" content="products" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>
      <div>
        <h1 css={headerStyles}>about</h1>
      </div>
      <div css={mainStyles}>
        plerp, slerp, glerp. that's what CRUNDSP is all about.
      </div>
    </>
  );
}