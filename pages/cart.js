import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
        <title>Cart</title>
        <meta name="cart" content="cart" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>bits</div>
    </>
  );
}
