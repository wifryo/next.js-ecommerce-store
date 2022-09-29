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
      {/* <Image
        src="/zebra.jpeg"
        width="400"
        height="400"
        alt="Zebra with meme sunglasses saying 'u wot m8' with a elftroll in the foreground"
      /> */}
    </>
  );
}
