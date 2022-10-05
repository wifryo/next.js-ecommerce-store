import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { miscellaniaDatabase } from '../../database/miscellania';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 320px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
`;
const cardStyles = css`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  margin-bottom: 50px;
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
  font-size: 18px;
  a {
    text-decoration: none;
    color: #eaebe2;
  }
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

export default function Miscellania(props) {
  return (
    <>
      <Head>
        <title>miscellania</title>
        <meta name="description" content="miscellania" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>
        {props.miscellania.map((miscellany) => {
          return (
            <div css={cardStyles} key={`item-div-${miscellany.id}`}>
              <Image
                css={imageStyles}
                src={`/miscellany/miscellany${miscellany.id}.png`}
                alt={`photo of ${miscellany.name}`}
                width="300"
                height="300"
              />
              <h2 css={titleStyles}>
                <Link href={`/miscellania/${miscellany.id}`}>
                  <a>{miscellany.name}</a>
                </Link>
              </h2>

              <h3 css={descriptionStyles}>{miscellany.description}</h3>
              <div css={baseWrapper}>
                <div css={priceStyles}>{miscellany.price}</div>
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
  const miscellania = miscellaniaDatabase.map((miscellany) => {
    return {
      ...miscellany,
      stars:
        parsedCookies.find(
          (cookieMiscellanyObject) =>
            miscellany.id === cookieMiscellanyObject.id,
        )?.stars || 0,
    };
  });

  return {
    props: {
      miscellania: miscellania,
    },
  };
}
