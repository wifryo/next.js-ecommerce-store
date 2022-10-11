import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';
import { getParsedCookie } from '../utils/cookies';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 455px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  margin-right: calc(50vw - 400px);
  margin-left: calc(50vw - 400px);
`;

const cardStyles = css`
  width: 800px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
`;
const imageStyles = css`
  margin: 0;
`;

const priceStyles = css`
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 40px;
`;

const titleStyles = css`
  font-size: 16px;
  margin-bottom: 20px;
  align-self: flex-start;
  a {
    text-decoration: none;
    color: #eaebe2;
  }
`;

const quantityStyles = css`
  margin-left: 30px;
  margin-right: 30px;
`;

const containerStyles = css`
  width: 300px;
  font-size: 15px;
  text-align: center;
  margin-left: 20px;
`;

const descriptionsStyles = css`
  display: flex;
  flex-direction: column;
`;

const deleteButtonStyles = css`
  width: 30px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 15px;
  align-self: flex-end;
  background-color: transparent;
  border: 0;
  color: #eaebe2;
  margin-bottom: 20px;
  cursor: pointer;
`;

const totalStyles = css`
  position: fixed;
  bottom: 50px;
  left: 50vw;
`;

const headerStyles = css`
  margin-left: calc(50vw - 330px);
`;

function removeItem(functionProps, id) {
  const newCart = functionProps.cart?.filter((item) => item.id !== id);
  functionProps.setCart(newCart);
}

function reduceItem(functionProps, id) {
  const foundCookie = functionProps.cart?.find(
    (cookieProductObject) => cookieProductObject.id === id,
  );
  if (foundCookie.cart > 1) {
    foundCookie.cart--;
    const newQuantity = [...functionProps.cart];
    functionProps.setCart(newQuantity);
  } else {
    removeItem(functionProps, id);
  }
}

function increaseItem(functionProps, id) {
  const foundCookie = functionProps.cart?.find(
    (cookieProductObject) => cookieProductObject.id === id,
  );
  foundCookie.cart++;
  const newQuantity = [...functionProps.cart];
  functionProps.setCart(newQuantity);
}

function returnTotalPrice(functionProps) {
  const priceArray = functionProps.cart?.map((cart) => {
    return {
      price: functionProps.products.find(
        (productObject) => cart.id === productObject.id,
      )?.price,
      quantity: cart.cart,
    };
  });
  console.log(priceArray);
  //return total price
}

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
      <div>
        <h1 css={headerStyles}>cart</h1>
      </div>
      {console.log(`plop: ${props.cart[0]}`)}
      <div css={bodyStyles}>
        {!props.cart?.length ? (
          <div>Empty cart alert! Load up on items or get out of my sight</div>
        ) : (
          props.cart?.map((singleProduct) => {
            const currentProduct = props.products.find(
              (item) => item.id === singleProduct.id,
            );
            return (
              <div
                css={cardStyles}
                key={`product-${currentProduct.id}`}
                data-test-id={`cart-product-${currentProduct.id}`}
              >
                <div>
                  <Link href={`/products/${currentProduct.id}`}>
                    <a data-test-id={`product-${currentProduct.id}`}>
                      <Image
                        css={imageStyles}
                        src={`/crumps/crump${currentProduct.id}.webp`}
                        alt={`photo of ${currentProduct.name}`}
                        width="300"
                        height="300"
                      />
                    </a>
                  </Link>
                </div>
                <div css={containerStyles}>
                  <div css={descriptionsStyles}>
                    <button
                      css={deleteButtonStyles}
                      onClick={() => removeItem(props, currentProduct.id)}
                    >
                      X
                    </button>
                    <div css={titleStyles}>{currentProduct.name}</div>
                    <div css={priceStyles}>{currentProduct.price}</div>
                    <span>
                      <button
                        onClick={() => reduceItem(props, currentProduct.id)}
                      >
                        -
                      </button>
                      <span css={quantityStyles}>{singleProduct.cart}</span>
                      <button
                        onClick={() => increaseItem(props, currentProduct.id)}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div css={totalStyles}>
        Cart total: plap!{' '}
        <button onClick={() => returnTotalPrice(props)}>
          returnTotalPrice
        </button>
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
