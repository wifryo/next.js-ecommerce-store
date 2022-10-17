import { css } from '@emotion/react';
import Head from 'next/head';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 370px);
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>BODY!</div>
    </>
  );
}
