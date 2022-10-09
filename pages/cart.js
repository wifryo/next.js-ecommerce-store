import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';
import { getParsedCookie } from '../utils/cookies';

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

export default function Cart(props) {
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
      <div css={bodyStyles}>
        <h1>Cart</h1>
        {!props.cart?.length ? (
          <div>Empty cart alert! Load up on items or get out of my sight</div>
        ) : (
          props.cart?.map((singleProduct) => {
            const currentProduct = props.products.find(
              (item) => item.id === singleProduct.id,
            );
            return (
              <div
                key={`product-${currentProduct.id}`}
                data-test-id={`cart-product-${currentProduct.id}`}
              >
                <div>
                  <Link href={`/products/${currentProduct.id}`}>
                    <a data-test-id={`product-${currentProduct.id}`}>
                      <Image
                        src={`/crumps/crump${currentProduct.id}.webp`}
                        alt={`photo of ${currentProduct.name}`}
                        width="300"
                        height="300"
                      />
                    </a>
                  </Link>
                </div>
                <div>
                  <div>{currentProduct.name}</div>
                  <div>
                    <div>{currentProduct.price}</div>
                  </div>
                  <div>Quantity: {singleProduct.cart}</div>
                </div>
              </div>
            );
          })
        )}
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
