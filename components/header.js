import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const headerStyles = css`
  background-color: #15141d;
  margin: 0px, 20px, 0px, 20px;
  padding-bottom: 50px;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const imageStyles = css`
  color: #eaebe2;
  opacity: 0.1;
`;

const topLineContainerStyles = css`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
`;

const logoStyles = css`
  color: #eaebe2;
  font-style: italic;
  padding: 10px;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 800;
  font-style: italic;
  font-size: 30px;
  a {
    text-decoration: none;
  }
  a:visited {
    color: #eaebe2;
  }
`;

const navStyles = css`
  font-family: 'Montserrat Alternates', sans-serif;
  align-self: center;
  margin: 0px;
  padding: 10px;

  a {
    color: #eaebe2;
    text-decoration: none;
    font-size: 12px;
  }
  > a + a {
    margin-left: 13px;
  }
`;

export default function Header() {
  return (
    <header css={headerStyles}>
      <div css={topLineContainerStyles}>
        <div css={logoStyles}>
          <Link href="/">CRUNDSP</Link>
        </div>
        <nav css={navStyles}>
          <Link href="/products">products</Link>
          <Link href="/miscellany">miscellany</Link>
          <Link href="/about">about</Link>
          <Link href="/team">team</Link>
          <Link href="/contact">contact</Link>
          <Link href="/cart">cart</Link>
          {/*
          Using an <a> tag is not best practice for
          most links (it will be slower) - use a
          Link component instead
          <a href="/about">About</a>
        */}
        </nav>
      </div>
      <div css={imageContainer}>
        <Image
          css={imageStyles}
          src="/crundsp-eye.svg"
          alt="picture of stylised eye"
          width="300"
          height="200"
        />
      </div>
    </header>
  );
}
