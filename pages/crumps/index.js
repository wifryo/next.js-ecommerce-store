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
  height: 500px;
  border-radius: 25px;
  border: 2px solid #587d71;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 30px;
`;
const imageStyles = css`
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin: 0;
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
              <h2>
                <Link href={`/crumps/${crump.id}`}>
                  <a>{crump.name}</a>
                </Link>
              </h2>
              <div>{/* {crump.icon} ⭐️ {item.stars} */}</div>
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
