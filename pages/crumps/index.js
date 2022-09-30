import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { crumpsDatabase } from '../../database/crumps';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 320px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;
const cardStyles = css`
  width: 300px;
  height: 800px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
`;
const imageStyles = css`
  margin: 0;
`;

const priceStyles = css`
  font-weight: 700;
  position: relative;
  padding-left: 10px;
  align-self: center;
`;

const titleStyles = css`
  font-size: 20px;
`;

const descriptionStyles = css`
  font-size: 15px;
  font-family: 'Montserrat Alternates', sans-serif;
  text-align: left;
`;

const buttonStyles = css`
  font-size: 20px;
  width: 140px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 15px;
  margin-right: 10px;
`;

const baseWrapper = css`
  display: flex;
  justify-content: space-between;
`;

export default function Crumps(props) {
  return (
    <>
      <Head>
        <title>crumps</title>
        <meta name="description" content="crumps" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>
        {props.crumps.map((crump) => {
          return (
            <div css={cardStyles} key={`item-div-${crump.id}`}>
              <Image
                css={imageStyles}
                src={`/crumps/crump${crump.id}.webp`}
                alt={`photo of ${crump.name}`}
                width="300"
                height="300"
              />
              <h2 css={titleStyles}>
                <Link href={`/crumps/${crump.id}`}>
                  <a>{crump.name}</a>
                </Link>
              </h2>

              <h3 css={descriptionStyles}>{crump.description}</h3>
              <div css={baseWrapper}>
                <div css={priceStyles}>{crump.price}</div>
                <button css={buttonStyles}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function getServerSideProps(context) {
  console.log(context.req.cookies.stars);

  // get the cookies from the request object and parse it if is not undefined
  const parsedCookies = context.req.cookies.stars
    ? JSON.parse(context.req.cookies.stars)
    : [];

  // loop over the database and add a new property called stars with either the value in the cookies or 0
  const crumps = crumpsDatabase.map((crump) => {
    return {
      ...crump,
      stars:
        parsedCookies.find(
          (cookieCrumpObject) => crump.id === cookieCrumpObject.id,
        )?.stars || 0,
    };
  });

  return {
    props: {
      crumps: crumps,
    },
  };
}
