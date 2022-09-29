import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Overview of the animals" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>Home</div>

      {/*
        The Next.js Image component will perform
        some optimizations such as:

        - Blocking the space on the page for the image
          before it loads (to reduce shift of content)
        - Image optimization (reduction in quality to
          deliver images faster)
        - etc
      */}
      {/* <Image
        src="/zebra.jpeg"
        width="400"
        height="400"
        alt="Zebra with meme sunglasses saying 'u wot m8' with a elftroll in the foreground"
      /> */}
    </>
  );
}
