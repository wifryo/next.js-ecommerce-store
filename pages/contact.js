import { css } from '@emotion/react';
import Head from 'next/head';

const mainStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 455px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
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

const baseWrapper = css`
  display: flex;
  justify-content: space-between;
`;

const headerStyles = css`
  margin-left: calc(50vw - 330px);
`;

export default function Contact() {
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
        <h1 css={headerStyles}>contact</h1>
      </div>
      <div css={mainStyles}>contact, contact, contact. ha ha! </div>
    </>
  );
}
