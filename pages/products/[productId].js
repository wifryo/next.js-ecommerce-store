import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { getProductById } from '../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

const imageStyles = css`
  margin: 0;
`;
const marginStyles = css`
  margin-right: calc(50vw - 370px);
  margin-left: calc(50vw - 370px);
`;

const descriptionStyles = css`
  font-size: 15px;
  font-family: 'Montserrat Alternates', sans-serif;
  text-align: left;
`;

const quantityButtonStyles = css``;

const cartButtonStyles = css``;

export default function Products(props) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  if (props.error) {
    return (
      <div>
        <Head>
          <title>product not found</title>
          <meta name="description" content="product not found" />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
          </style>
        </Head>
        <h1>{props.error}</h1>
        Sorry, try the <Link href="/index">home page</Link>
      </div>
    );
  }

  return (
    <div>
      <div css={marginStyles}>
        <Head>
          <title>Product single page</title>
          <meta name="description" content="Product single page" />
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
          </style>
        </Head>

        <h1>{props.singleProduct.name}</h1>
        <div css={descriptionStyles}>{props.singleProduct.description}</div>
        <Image
          css={imageStyles}
          src={`/products/product${props.singleProduct.id}.webp`}
          alt={`photo of ${props.singleProduct.name}`}
          width="300"
          height="300"
        />
        <button
          onClick={() => {
            if (selectedQuantity === 0) {
              return 0;
            } else {
              setSelectedQuantity(selectedQuantity - 1);
            }
          }}
          css={quantityButtonStyles}
        >
          -
        </button>
        <div data-test-id="product-quantity">{selectedQuantity}</div>
        <button
          onClick={() => setSelectedQuantity(selectedQuantity + 1)}
          css={quantityButtonStyles}
        >
          +
        </button>
        <button
          css={cartButtonStyles}
          data-test-id="product-add-to-cart"
          onClick={() => {
            if (!props.cart) {
              props.setCart([
                {
                  id: props.singleProduct.id,
                  name: props.singleProduct.name,
                  price: props.singleProduct.price,
                  cart: selectedQuantity,
                },
              ]);
              return;
            }

            const foundCookie = props.cart?.find(
              (cookieProductObject) =>
                cookieProductObject.id === props.singleProduct.id &&
                cookieProductObject.name === props.singleProduct.name &&
                cookieProductObject.price === props.singleProduct.price,
            );

            if (!foundCookie) {
              props.cart.push({
                id: props.singleProduct.id,
                name: props.singleProduct.name,
                price: props.singleProduct.price,
                cart: selectedQuantity,
              });
            } else {
              foundCookie.cart = foundCookie.cart + selectedQuantity;
            }
            const newQuantity = [...props.cart];

            props.setCart(newQuantity);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const productId = context.params.productId;
  const singleProduct = await getProductById(productId);

  if (typeof singleProduct === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Product not found',
      },
    };
  }

  return { props: { singleProduct: singleProduct } };
}
