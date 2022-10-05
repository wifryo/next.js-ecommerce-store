import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { crumpsDatabase } from '../../database/crumps';
import { getProducts } from '../../database/products';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 320px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  margin-right: calc(50vw - 370px);
  margin-left: calc(50vw - 370px);
`;
const cardStyles = css`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
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
        {props.products.map((product) => {
          return (
            <div css={cardStyles} key={`item-div-${product.id}`}>
              <Image
                css={imageStyles}
                src={`/crumps/product${product.id}.webp`}
                alt={`photo of ${product.name}`}
                width="300"
                height="300"
              />
              <h2 css={titleStyles}>
                <Link href={`/crumps/${product.id}`}>
                  <a>{product.name}</a>
                </Link>
              </h2>

              <h3 css={descriptionStyles}>{product.description}</h3>
              <div css={baseWrapper}>
                <div css={priceStyles}>{product.price}</div>
                <button css={buttonStyles}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

/* export function getServerSideProps(context) {
  console.log(context.req.cookies.stars);

  // get the cookies from the request object and parse it if is not undefined
  const parsedCookies = context.req.cookies.stars
    ? JSON.parse(context.req.cookies.stars)
    : [];

  // loop over the database and add a new property called stars with either the value in the cookies or 0
  const crumps = crumpsDatabase.map((product) => {
    return {
      ...product,
      stars:
        parsedCookies.find(
          (cookieCrumpObject) => product.id === cookieCrumpObject.id,
        )?.stars || 0,
    };
  });

  return {
    props: {
      crumps: crumps,
    },
  };
} */

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}
