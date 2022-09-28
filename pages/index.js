import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Overview of the animals" />
      </Head>

      <div>Home</div>

      {/*
        The Next.js Image component will perform
        some optimizations such as:
        - Blocking the space on the page for the image
          before it loads (to reduce shift of content)
        - Image optimization (reduction in quality to
          deliver images faster)
        - etc
      */}

      {/*
        This is a way of avoiding having to find
        the width and height and writing them
        manually in your JSX
      */}

      {/*
        You can also use the normal img
        tag if you do not want these optimizations
      */}
    </>
  );
}
