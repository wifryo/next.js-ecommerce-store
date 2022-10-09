import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';

const headerStyles = css`
  margin-left: calc(50vw - 350px);
`;

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
  font-weight: 300;
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

export default function Products(props) {
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
        <h1 css={headerStyles}>produccs</h1>
      </div>
      <div css={bodyStyles}>
        {props.products.map((product) => {
          return (
            <div css={cardStyles} key={`item-div-${product.id}`}>
              <Image
                css={imageStyles}
                src={`/crumps/crump${product.id}.webp`}
                alt={`photo of ${product.name}`}
                width="300"
                height="300"
              />
              <h2 css={titleStyles}>
                <Link href={`/products/${product.id}`}>
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

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: {
      products: products,
    },
  };
}