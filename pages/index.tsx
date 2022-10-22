import { css } from '@emotion/react';
import Head from 'next/head';

const bodyStyles = css`
  margin: 0px, 20px, 0px, 20px;
  min-height: calc(100vh - 350px);
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: calc(50vw - 220px);
  margin-left: calc(50vw - 220px);
`;

const logoStyles = css`
  color: #eaebe2;
  font-style: italic;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 16px;
  margin-right: 0.5em;
  display: inline-block;
`;

const textStyles = css`
  color: #eaebe2;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 16px;
`;

const timeAlertTextStyles = css`
  color: #eaebe2;
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 12px;
`;

const buttonStyles = css`
  font-family: 'Montserrat Alternates', sans-serif;
  padding: 10px 10px;
  border: 2px solid #000000;
  -webkit-transition: 0.2s ease-in-out;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
  background-color: #000000;
  color: white;
  &:hover {
    background-image: url('/crundsp-eye.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-color: #c9c7c7;
    color: #000000;
    font-weight: 1000;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,400;1,800&display=swap');
        </style>
      </Head>

      <div css={bodyStyles}>
        <div>
          <span css={textStyles}>
            welcome to <span css={logoStyles}>CRUNDSP.</span> <br />
            <br />
            <div>the boldest new designs from the scrandlethrip zone.</div>
          </span>
        </div>
        <button
          css={buttonStyles}
          onClick={() => {
            window.location.href = '/products';
          }}
        >
          onwards, to the bits!
        </button>
        <div css={timeAlertTextStyles}>
          note: our systems have detected that you are accessing this website
          from before the year 3651, which may be forbidden under local law.
          please contact your local temporal authorities for more information.
        </div>
        <br />
        <div css={timeAlertTextStyles}>
          external links may not function due to their destinations not having
          yet been created.
        </div>
      </div>
    </>
  );
}
